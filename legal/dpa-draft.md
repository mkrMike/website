# Data Processing Agreement — DRAFT

> **Status: draft for legal review, 25 October 2026. Not yet binding. The
> bracketed items must be completed before this document is used.**
> Provided to each business ("the Business") together with the Samatrica
> terms of service, of which it forms part.

## 1. Parties and roles

This Data Processing Agreement ("DPA") is between the Business (the
**controller**) and Samatrica OÜ, a private limited company registered in
the Estonian Commercial Register under registry code 16285192, LEI
984500DBA4ZE2HM61434, VAT number EE102401154, registered address
Sepapaja tn 6, Lasnamäe linnaosa, 15551 Tallinn, Harju maakond, Estonia
("Samatrica", the **processor**), for the personal data Samatrica
processes on the Business's behalf when providing the Samatrica service
(AI chat assistant, appointment requests and dashboard — "the Service").

In this DPA, "data protection law" means the EU General Data Protection
Regulation ("GDPR"), the Estonian Personal Data Protection Act
(isikuandmete kaitse seadus) and the national law implementing the GDPR
in the Business's country. This DPA is intended to meet the requirements
of GDPR art. 28(3).

## 2. Subject matter, duration, nature and purpose

Samatrica processes personal data of the Business's customers, patients
and website visitors for the sole purpose of providing the Service:
answering chat messages, collecting and verifying contact details, taking
and managing appointment requests, and enabling the Business's employees
to take over conversations. Processing lasts as long as the Business's
account, plus the deletion window in Section 9.

## 3. Categories of data and data subjects

- Data subjects: the Business's customers, patients and website visitors;
  the Business's employees (dashboard accounts).
- Data: identification and contact data (first/last name, email, phone),
  conversation content, appointment requests and their status, technical
  data needed to run the chat (conversation identifiers, timestamps).
- **Special categories:** in a healthcare context, conversation content
  and appointment requests (e.g. the specialty or doctor requested) can
  reveal health information, which data protection law treats as
  sensitive data (GDPR art. 9). The Business warrants it is entitled to
  have such data processed; Samatrica processes it only as instructed and
  with the safeguards in this DPA.

## 4. Instructions

Samatrica processes personal data only on the Business's documented
instructions, which are: the configuration the Business sets in the
dashboard and the normal operation of the Service as described in the
terms. Samatrica informs the Business if an instruction appears to
violate data protection law.

## 5. Confidentiality and security (art. 32)

Persons authorised by Samatrica to process the data are bound by
confidentiality. Technical and organisational measures include: hosting
in the European Union with a third-party hosting provider (Section 6);
assistant replies generated through Amazon Bedrock in AWS regions in the
European Union, without conversations being shared with the model's
developer or used for training; encryption in transit
(TLS); per-business data isolation enforced in the backend; verified
contact details (email codes) before an appointment request reaches the
Business; access to production limited to the persons operating the
Service; [BACKUP AND ENCRYPTION-AT-REST DETAILS — to be confirmed in AWS].

## 6. Sub-processors

The Business gives general authorisation to the sub-processors listed
below. Samatrica notifies the Business of intended changes at least
30 days in advance; the Business may object on reasonable data
protection grounds, in which case the parties seek a solution or the
Business may terminate.

| Sub-processor | Purpose | Location / transfer safeguard |
| --- | --- | --- |
| Amazon Web Services EMEA SARL | Hosting of the Service and its database; generation of assistant replies through Amazon Bedrock (Anthropic Claude model); AWS does not share prompts or replies with the model developer and does not use them for training | EU: hosting in Frankfurt (eu-central-1); AI requests sent from Frankfurt through the Bedrock EU inference profile, processed only in AWS regions in the EU |
| Sendinblue SAS (Brevo), 9-17 rue Salneuve, 75017 Paris, France, RCS Paris 498 019 298 | Sending of verification codes and booking notifications by email | EU (France) [ACCEPT BREVO'S DPA] |

Providers for SMS delivery and for billing will be added under the
procedure above before those features are used.

Samatrica imposes on each sub-processor data protection obligations
equivalent to this DPA and remains liable for their performance.

## 7. Assistance to the controller

Samatrica assists the Business, taking into account the nature of the
processing: with data subject requests (access, rectification, erasure,
portability, objection) concerning data in the Service — the dashboard
provides the data directly, and Samatrica helps on request at
contact@samatrica.com; and with the Business's obligations on security,
breach notification and impact assessments (GDPR articles 32–36).

## 8. Personal data breaches

Samatrica notifies the Business **without undue delay** after becoming
aware of a personal data breach affecting the Business's data, with the
information data protection law requires (GDPR art. 33(3)) as it becomes
available, so the Business can meet its own notification duties towards
the competent authority and the persons concerned.

## 9. Retention, deletion and return

By entering into this DPA, the Business instructs Samatrica to keep and
then automatically delete personal data processed in the Service as
follows:

| Data | Retention |
| --- | --- |
| Chat conversations (messages of the customer, the assistant and the Business's employees) | 90 days after the last message in the conversation |
| Contact details never verified (contact form not completed) | 30 days |
| Verification codes | until they expire (minutes); never reused |
| Customer records and bookings | 24 months after the customer's last appointment |
| Technical logs | 30 days |
| Backups | overwritten on a rotation of [35] days |

Instead of deletion, Samatrica may irreversibly anonymise data (for
example keeping only the date and service of a past booking, without any
data identifying the customer). The Business may request other periods
in writing; once the Service offers a retention setting, the value the
Business chooses there is its instruction.

On termination of the Service, the Business may export its data for
30 days; Samatrica then deletes all personal data processed on the
Business's behalf, unless applicable law requires retention.
Deletion from backups follows the backup rotation period of
[BACKUP RETENTION — to be confirmed in AWS].

## 10. Audits

Samatrica makes available the information necessary to demonstrate
compliance with this DPA (GDPR art. 28) and allows audits, at most once a
year, with 30 days' notice, during business hours, without access to
other businesses' data, and at the Business's cost.

## 11. Location of the data and transfers

The Service's data is stored and processed in the European Union by the
sub-processors in Section 6, including the generation of assistant
replies. Samatrica does not transfer personal data
outside the European Economic Area except where the safeguards of GDPR
chapter V are in place (an adequacy decision, or the EU standard
contractual clauses with any supplementary measures needed). [CONFIRM
WHETHER ANY PERSONNEL ACCESS PRODUCTION FROM OUTSIDE THE EEA, E.G. THE
UAE; IF SO, DOCUMENT THE SAFEGUARD HERE.]

## 12. Law

This DPA is governed by the laws of the Republic of Estonia, like the
terms of service, and Harju County Court (Harju Maakohus) in Tallinn has
exclusive jurisdiction. In case of
conflict between this DPA and the terms, this DPA prevails for data
protection matters.
