const IP = "localhost";

const ticketSrvUrl = `http://${IP}:7100/api`;

export const config = {
  basePath: "/plugins/xformation-servicedesk-ui-plugin/page",

  SERVICEDESK_API_URL: "",
  ADD_COMPANY_URL: `${ticketSrvUrl}/addCompany`,
  GET_ALL_COMPANIES_URL: `${ticketSrvUrl}/listAllcompanies`,
  GET_COMPANIES_CONTACT_LIST_URL: `${ticketSrvUrl}/companyConatctList`,
  ADD_CONTACT_URL: `${ticketSrvUrl}/addContact`,
  GET_CONTACT_WITH_COMPANY_NAME: `${ticketSrvUrl}/contactWithCompanyName`,
  SEVERITY_ERROR: "error",
  SEVERITY_SUCCESS: "success",
  COMPANY_ADDED_SUCCESS: "Company Successfully added",
  COMPANY_ADDED_ERROR: "Company Can't added",
  CONTACT_ADDED_SUCCESS: "Company Successfully added",
  CONTACT_ADDED_ERROR: "Company Can't added",
  SERVER_ERROR_MESSAGE:
    "Operation failed. Please check service logs for details"
};
