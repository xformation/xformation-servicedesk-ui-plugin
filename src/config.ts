const IP = "100.64.108.25";

const ticketSrvUrl = `http://${IP}:7100/api`;

export const config = {
  basePath: "/plugins/xformation-servicedesk-ui-plugin/page",

  SERVICEDESK_API_URL: "",
  ADD_COMPANY_URL: `${ticketSrvUrl}/addCompany`,
  GET_ALL_COMPANIES_URL: `${ticketSrvUrl}/listAllcompanies`,
  GET_COMPANIES_CONTACT_LIST_URL: `${ticketSrvUrl}/companyConatctList`,
  ADD_CONTACT_URL: `${ticketSrvUrl}/addContact`,
  ADD_TICKET_URL: `${ticketSrvUrl}/addTicket`,
  ADD_AGENT_URL: `${ticketSrvUrl}/addAgent`,
  GET_CONTACT_WITH_COMPANY_NAME: `${ticketSrvUrl}/contactWithCompanyName`,
  SEND_EMAIL_URL: `${ticketSrvUrl}/sendEmail`,
  GET_ALL_CONTACT_URL: `${ticketSrvUrl}/listAllContacts`,
  GET_ALL_AGENT_URL: `${ticketSrvUrl}/listAllAgents`,
  GET_ALL_TICKET_URL: `${ticketSrvUrl}/listAllTickets`,
  GET_ALL_TICKET_FOR_TABLE_URL: `${ticketSrvUrl}/getTicketForTable`,
  GET_ALL_TICKETING_DATA_URL: `${ticketSrvUrl}/getTicketingData`,
  GET_TOP_PERFORMER_DATA_URL: `${ticketSrvUrl}/topPerformerAgents`,
  SEVERITY_ERROR: "error",
  SEVERITY_SUCCESS: "success",
  COMPANY_ADDED_SUCCESS: "Company Successfully added",
  AGENT_ADDED_SUCCESS: "Agent Successfully added",
  COMPANY_ADDED_ERROR: "Company Can't added",
  AGENT_ADDED_ERROR: "Agent Can't added",
  CONTACT_ADDED_SUCCESS: "Company Successfully added",
  CONTACT_ADDED_ERROR: "Company Can't added",
  SEND_EMAIL_SUCCESS: "Email sent successfully",
  SEND_EMAIL_ERROR: "Can't send Email",
  ADD_TICKET_SUCCESS: "Ticket Successfully added",
  ADD_TICKET_ERROR: "Ticket Can't added",
  SERVER_ERROR_MESSAGE:
    "Operation failed. Please check service logs for details"
};
