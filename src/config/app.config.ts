interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Team',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage teams',
    'Manage cars',
    'Manage bookings',
    'Manage ratings',
    'Manage reports',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6de57883-3c4c-46fb-a429-6e460c2c5d4a',
};
