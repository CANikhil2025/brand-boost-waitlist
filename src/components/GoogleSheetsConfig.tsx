
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Settings, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GoogleSheetsConfigProps {
  onSave: (config: { apiKey: string; spreadsheetId: string; range: string }) => void;
  currentConfig?: { apiKey: string; spreadsheetId: string; range: string };
}

const GoogleSheetsConfig = ({ onSave, currentConfig }: GoogleSheetsConfigProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState(currentConfig?.apiKey || '');
  const [spreadsheetId, setSpreadsheetId] = useState(currentConfig?.spreadsheetId || '');
  const [range, setRange] = useState(currentConfig?.range || 'Sheet1!A:B');
  const { toast } = useToast();

  const handleSave = () => {
    if (!apiKey || !spreadsheetId || !range) {
      toast({
        title: "Missing Configuration",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    onSave({ apiKey, spreadsheetId, range });
    setIsOpen(false);
    toast({
      title: "Configuration Saved",
      description: "Google Sheets integration has been configured successfully.",
    });
  };

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50"
      >
        <Settings className="w-4 h-4 mr-2" />
        Configure Google Sheets
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle>Google Sheets Configuration</CardTitle>
          <CardDescription>
            Configure your Google Sheets API to store waitlist emails
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="apiKey">Google Sheets API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Your Google API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="spreadsheetId">Spreadsheet ID</Label>
            <Input
              id="spreadsheetId"
              placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
              value={spreadsheetId}
              onChange={(e) => setSpreadsheetId(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="range">Range (e.g., Sheet1!A:B)</Label>
            <Input
              id="range"
              placeholder="Sheet1!A:B"
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleSave} className="flex-1">
              <Save className="w-4 h-4 mr-2" />
              Save Configuration
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleSheetsConfig;
