
// Google Sheets service for form submissions
export const GOOGLE_SHEETS_CONFIG = {
  spreadsheetId: '1pfC_a0rxSm3vGoJdsSufnyOnpYdlNqnsg-dDTwhY_fY',
  apiKey: 'YOUR_GOOGLE_SHEETS_API_KEY', // You'll need to replace this
  range: 'Sheet1!A:F' // Adjust range as needed
};

export interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  company: string;
  requirement: string;
  timestamp?: string;
}

export interface PopupFormData {
  name: string;
  mobile: string;
  state: string;
  requirement: string;
  timestamp?: string;
}

export const appendToGoogleSheets = async (data: ContactFormData | PopupFormData, sheetType: 'contact' | 'popup') => {
  try {
    console.log(`Sending ${sheetType} data to Google Sheets:`, data);
    
    // Add timestamp
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    
    let values: string[];
    
    if (sheetType === 'contact') {
      const contactData = data as ContactFormData;
      values = [
        timestamp,
        contactData.name,
        contactData.email || '',
        contactData.mobile,
        contactData.company || '',
        contactData.requirement,
        'Contact Form'
      ];
    } else {
      const popupData = data as PopupFormData;
      values = [
        timestamp,
        popupData.name,
        '', // email (empty for popup)
        popupData.mobile,
        popupData.state,
        popupData.requirement,
        'Quick Contact Popup'
      ];
    }

    // Using Google Sheets API v4 via fetch
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.spreadsheetId}/values/${GOOGLE_SHEETS_CONFIG.range}:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_CONFIG.apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [values]
        })
      }
    );

    if (response.ok) {
      console.log('Data successfully added to Google Sheets');
      return { success: true };
    } else {
      const errorData = await response.json();
      console.error('Google Sheets API error:', errorData);
      throw new Error(`Google Sheets API error: ${response.status}`);
    }
  } catch (error) {
    console.error('Error adding data to Google Sheets:', error);
    throw error;
  }
};
