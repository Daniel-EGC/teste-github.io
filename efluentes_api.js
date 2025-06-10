class EfluentesAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async fetchData(codEstacao) {
    const params = new URLSearchParams({ codEstacao }).toString();
    const response = await fetch(`${this.baseUrl}/dados?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async fetchSummary(codEstacao) {
    const params = new URLSearchParams({ codEstacao }).toString();
    const response = await fetch(`${this.baseUrl}/resumo?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
}
