import { Box, Wrench, Clipboard } from "../components/common/AgreementIcons.js";

export const agreementData = [
  {
    icon: Clipboard,
    title: "Equip ID Included",
    details: [
      "Equipment Manuals",
      "Advanced Service Automation Platform",
      "Comprehensive Asset Management",
      "Information Hot Spots",
      "Manufacturer Bulletins",
      "Technician Assistance Videos",
    ]
  },
  {
    icon: Box,
    title: "Labor",
    details: [
      "Labor Only: Technician Labor for all service events included"
    ]
  },
  {
    icon: Wrench,
    title: "RPM Planned Maintenance ",
    details: [
      "Planned Maintenance: Technician labor plus all maintenance material"
    ]
  },
  {
    icon: Box,
    title: "Labor and Material",
    details: [
      "Labor and Material: Technician labor plus all material used on service events"
    ]
  },
];
