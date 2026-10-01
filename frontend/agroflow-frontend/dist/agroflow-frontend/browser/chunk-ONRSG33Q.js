// src/app/features/administration/data/administration-preview.data.ts
var APPROVAL_CONFIGURATION_PREVIEW = [
  { id: "AC-001", requestType: "IOU", department: "Finance", approvalLevel: 1, approverRole: "Manager", minimumAmount: 0, maximumAmount: 1e3, active: true },
  { id: "AC-002", requestType: "IOU", department: "Finance", approvalLevel: 2, approverRole: "Admin", minimumAmount: 1000.01, maximumAmount: null, active: true },
  { id: "AC-003", requestType: "Petty Cash", department: "Operations", approvalLevel: 1, approverRole: "Manager", minimumAmount: 0, maximumAmount: 500, active: true },
  { id: "AC-004", requestType: "Procurement", department: "Procurement", approvalLevel: 1, approverRole: "Approver", minimumAmount: 0, maximumAmount: 5e3, active: true },
  { id: "AC-005", requestType: "Procurement", department: "Procurement", approvalLevel: 2, approverRole: "Admin", minimumAmount: 5000.01, maximumAmount: null, active: false }
];
var SYSTEM_SETTINGS_PREVIEW = {
  organizationName: "AgroFlow Enterprise",
  defaultCurrency: "USD",
  dateFormat: "MMM d, yyyy",
  notificationSettings: { email: true, inApp: true, approvalReminders: true },
  requestNumberPrefix: "REQ"
};
var AUDIT_LOG_PREVIEW = [
  { id: "LOG-2081", user: "Amara Patel", action: "Updated", module: "System Settings", description: "Changed the default currency.", timestamp: "2026-10-01T08:15:00Z", ipAddress: "192.0.2.41", status: "Success" },
  { id: "LOG-2080", user: "Daniel Kim", action: "Approved", module: "Approvals", description: "Approved request REQ-2026-0508.", timestamp: "2026-10-01T07:42:00Z", ipAddress: "192.0.2.58", status: "Success" },
  { id: "LOG-2079", user: "Amara Patel", action: "Updated", module: "Approval Configuration", description: "Changed the Procurement approval limit.", timestamp: "2026-09-30T16:28:00Z", ipAddress: "192.0.2.41", status: "Success" },
  { id: "LOG-2078", user: "Mina Chen", action: "Created", module: "Requests", description: "Submitted an IOU request.", timestamp: "2026-09-30T14:05:00Z", ipAddress: "192.0.2.76", status: "Success" },
  { id: "LOG-2077", user: "Jordan Lee", action: "Sign in failed", module: "Authentication", description: "Invalid credentials were provided.", timestamp: "2026-09-30T12:11:00Z", ipAddress: "192.0.2.103", status: "Failed" },
  { id: "LOG-2076", user: "Amara Patel", action: "Deactivated", module: "Users", description: "Deactivated a user account.", timestamp: "2026-09-29T10:30:00Z", ipAddress: "192.0.2.41", status: "Success" },
  { id: "LOG-2075", user: "Priya Shah", action: "Created", module: "Departments", description: "Added a department record.", timestamp: "2026-09-28T09:18:00Z", ipAddress: "192.0.2.67", status: "Success" }
];

export {
  APPROVAL_CONFIGURATION_PREVIEW,
  SYSTEM_SETTINGS_PREVIEW,
  AUDIT_LOG_PREVIEW
};
//# sourceMappingURL=chunk-ONRSG33Q.js.map
