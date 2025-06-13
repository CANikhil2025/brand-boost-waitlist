
export interface GoogleSheetsConfig {
  apiKey: string;
  spreadsheetId: string;
  range: string;
}

export const appendToGoogleSheet = async (
  email: string,
  config: GoogleSheetsConfig
): Promise<boolean> => {
  try {
    const { apiKey, spreadsheetId, range } = config;
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [[email, new Date().toISOString()]],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return false;
  }
};
