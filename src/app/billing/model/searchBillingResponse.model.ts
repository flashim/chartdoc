export class SearchBillingResponse {
     date: Date;
     patientName: string;
     patientId: string
     feeTicketNo: string;
     appointmentId: number;
     claimBalance: number;
     patientBalance: number;
     statusId: number;
     status: string;
     chargeId: number;
     modeOfTransaction: number;
     doctorName: string;
     insuranceId1: number;
     insuranceName1: string;
     insuranceId2: number;
     insuranceName2: string;
     insuranceId3: number;
     insuranceName3: string;
     locationId: number;
     locationName: string;
     placeOfId: number;
     placeOfName: string;
     serviceId: number
     serviceName: string;
     referenceId: number;
     referenceName: string;
     fileAsId: number;
     fileAsName: string;
     reasonId: number;
     disposed: boolean;
}