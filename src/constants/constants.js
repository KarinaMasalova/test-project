export const url = 'https://5ff1d38edb1158001748b5c2.mockapi.io/api/v1/users/';

export const colorPrimary = '#fc4a1f';
export const colorPrimaryRgba = 'rgba(252,74,31,0.3)';
export const menuItemHeight = 48;

export const PEOPLE_KEY = 'people';
export const CHARTS_KEY = 'charts';
export const headCells = [
    { id: 'avatar', disablePadding: false, label: 'Avatar' },
    { id: 'name', disablePadding: false, label: 'Name' },
    { id: 'role', disablePadding: false, label: 'Role' },
    { id: 'lastLoggedIn', disablePadding: false, label: 'Last logged in' },
    { id: 'profileViews', disablePadding: false, label: 'Profile views' },
    { id: 'age', disablePadding: false, label: 'Age' },
    { id: 'country', disablePadding: false, label: 'Country' },
    { id: 'city', disablePadding: false, label: 'City' },
    { id: 'address', disablePadding: false, label: 'Address' },
    { id: 'phone', disablePadding: false, label: 'Phone number' },
    { id: 'company', disablePadding: false, label: 'Company' },
    { id: 'connections', disablePadding: false, label: 'Connections' },
];
export const ageOptions = [
    { id: 0, label: "< 18", maxValue: 18 },
    { id: 1, label: "< 25", maxValue: 25 },
    { id: 2, label: "< 35", maxValue: 35 },
    { id: 3, label: "< 50", maxValue: 50 },
    { id: 4, label: "< 100", maxValue: 100 }
];
export const roleOptions = [
    { id: 0, label: "lawyer" },
    { id: 1, label: "client" }
];
export const pieOptions = {
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "The Ratio of Lawyers to Clients",
    exportEnabled: true,
    title: {
        text: "The Ratio of Lawyers to Clients"
    },
    data: [{
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
    }]
}
