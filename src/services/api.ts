const API_BASE_URL = 'http://localhost:8000/api/v1';

interface QueryParams {
  query: string;
  limit?: number;
  offset?: number;
  order_by?: string;
}

interface Citation {
  number: number;
  url: string;
  text: string;
  title: string;
}

interface GenerateResponse {
  answer: string;
  conversation_id: string;
  message_history: Array<{ role: string; content: string }>;
  citations: Citation[];
  sources: string[];
  query_params: QueryParams;
}

export const api = {
  async search(params: QueryParams) {
    try {
      const response = await fetch(`${API_BASE_URL}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Search failed');
      }

      return response.json();
    } catch (error) {
      console.error('Search API error:', error);
      throw error;
    }
  },

  async generate(
    params: QueryParams,
    conversationId?: string
  ): Promise<GenerateResponse> {
    try {
      const url = `${API_BASE_URL}/generate${
        conversationId ? `?conversation_id=${conversationId}` : ''
      }`;
      console.log('Generate API request:', { url, params }); // Debug log

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Generation failed');
      }

      const data = await response.json();
      console.log('Generate API response:', data); // Debug log
      return data;
    } catch (error) {
      console.error('Generate API error:', error);
      throw error;
    }
  },

  async getConversation(conversationId: string) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/conversation/${conversationId}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to fetch conversation');
      }

      return response.json();
    } catch (error) {
      console.error('Get conversation error:', error);
      throw error;
    }
  },

  async deleteConversation(conversationId: string) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/conversation/${conversationId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to delete conversation');
      }

      return response.json();
    } catch (error) {
      console.error('Delete conversation error:', error);
      throw error;
    }
  },

  // Helper function to validate response data
  validateResponse(data: any): data is GenerateResponse {
    return (
      data &&
      typeof data.answer === 'string' &&
      typeof data.conversation_id === 'string' &&
      Array.isArray(data.message_history) &&
      Array.isArray(data.citations) &&
      Array.isArray(data.sources) &&
      data.query_params &&
      typeof data.query_params.query === 'string'
    );
  },
};

// Add error types for better error handling
export class APIError extends Error {
  constructor(message: string, public statusCode: number, public data?: any) {
    super(message);
    this.name = 'APIError';
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}
