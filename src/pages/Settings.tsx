import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/auth';

export default function Settings() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState(user?.email ?? '');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [integrationsEnabled, setIntegrationsEnabled] = useState(true);

  useEffect(() => {
    // Load preferences from localStorage (demo)
    const prefs = localStorage.getItem('cortexone_prefs');
    if (prefs) {
      const p = JSON.parse(prefs);
      setDarkMode(!!p.darkMode);
      setNotifications(p.notifications !== false);
      setIntegrationsEnabled(p.integrationsEnabled !== false);
    }
  }, []);

  const save = () => {
    const p = { darkMode, notifications, integrationsEnabled };
    localStorage.setItem('cortexone_prefs', JSON.stringify(p));
    toast({ title: 'Saved', description: 'Settings saved locally (demo).' });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="displayName">Display name</Label>
                <Input id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
              </div>
              <div>
                <Label>Signed in as</Label>
                <p className="text-sm text-muted-foreground">{user?.email ?? 'Not signed in'}</p>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => toast({ title: 'Profile', description: 'Profile saved (demo).' })}>Save</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Dark mode</Label>
                  <p className="text-xs text-muted-foreground">Toggle dark theme</p>
                </div>
                <Switch checked={darkMode} onCheckedChange={(v) => setDarkMode(!!v)} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Notifications</Label>
                  <p className="text-xs text-muted-foreground">Enable email notifications</p>
                </div>
                <Switch checked={notifications} onCheckedChange={(v) => setNotifications(!!v)} />
              </div>

              <div className="flex justify-end">
                <Button onClick={save}>Save preferences</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <Label>Supabase (mock)</Label>
                <p className="text-xs text-muted-foreground">Toggle mock Supabase integration used by demo.</p>
              </div>
              <Switch checked={integrationsEnabled} onCheckedChange={(v) => setIntegrationsEnabled(!!v)} />
            </div>

            <div className="mt-4 flex justify-end">
              <Button onClick={() => toast({ title: 'Integrations', description: 'Integration settings saved (demo).' })}>Save</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
