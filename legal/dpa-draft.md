# Data Processing Agreement — DRAFT

> **Status: draft for legal review, 8 October 2026. Not yet binding. The
> bracketed items must be completed before this document is used.**
> Provided to each clinic ("the Business") together with the Samatrica
> terms of service, of which it forms part.

## 1. Parties and roles

This Data Processing Agreement ("DPA") is between the Business (the
**controller**) and Samatrica OÜ, a private limited company registered in
Estonia, registry code 16285192, VAT EE102401154, registered address
Sepapaja tn 6, 15551 Tallinn, Estonia (the **processor**), for the
personal data Samatrica
processes on the Business's behalf when providing the Samatrica service
(AI chat assistant, appointment requests and dashboard — "the Service").

## 2. Subject matter, duration, nature and purpose

Samatrica processes personal data of the Business's patients and website
visitors for the sole purpose of providing the Service: answering chat
messages, collecting and verifying contact details, taking and managing
appointment requests, and enabling the Business's employees to take over
conversations. Processing lasts as long as the Business's account, plus
the deletion window in Section 9.

## 3. Categories of data and data subjects

- Data subjects: the Business's patients and website visitors; the
  Business's employees (dashboard accounts).
- Data: identification and contact data (first/last name, email, phone),
  conversation content, appointment requests and their status, technical
  data needed to run the chat (conversation identifiers, timestamps).
- **Special categories:** in a healthcare context, conversation content
  and appointment requests (e.g. the specialty or doctor requested) can
  reveal health information (GDPR art. 9). The Business warrants it is
  entitled to have such data processed; Samatrica processes it only as
  instructed and with the safeguards in this DPA.

## 4. Instructions

Samatrica processes personal data only on the Business's documented
instructions, which are: the configuration the Business sets in the
dashboard and the normal operation of the Service as described in the
terms. Samatrica informs the Business if an instruction appears to
violate data protection law.

## 5. Confidentiality and security (art. 32)

Persons authorised by Samatrica to process the data are bound by
confidentiality. Technical and organisational measures include: hosting
in the European Union (AWS, Frankfurt region); encryption in transit
(TLS); per-business data isolation enforced in the backend; verified
contact details (email codes) before an appointment request reaches the
Business; access to production limited to the persons operating the
Service; [BACKUP AND ENCRYPTION-AT-REST DETAILS — to be completed with
the backend owner].

## 6. Sub-processors

The Business gives general authorisation to the sub-processors listed
below. Samatrica notifies the Business of intended changes at least
[30] days in advance; the Business may object on reasonable data
protection grounds, in which case the parties seek a solution or the
Business may terminate.

| Sub-processor | Purpose | Location / transfer safeguard |
| --- | --- | --- |
| Amazon Web Services EMEA SARL | Hosting | EU (Frankfurt) |
| [AI PROVIDER LEGAL NAME] | Generation of assistant replies | [LOCATION; SCC / adequacy — to be completed; no training on the data] |
| [EMAIL PROVIDER] | Verification codes, notifications | [to be completed] |
| [SMS PROVIDER] | SMS codes (when enabled) | [to be completed] |
| Stripe (when payments launch) | Billing of the Business (not patient data) | [to be completed] |

Samatrica imposes on each sub-processor data protection obligations
equivalent to this DPA and remains liable for their performance.

## 7. Assistance to the controller

Samatrica assists the Business, taking into account the nature of the
processing: with data subject requests (access, rectification, erasure,
portability, objection) concerning data in the Service — the dashboard
provides the data directly, and Samatrica helps on request at
contact@samatrica.com; and with the Business's obligations under
articles 32–36 (security, breach notification, impact assessments).

## 8. Personal data breaches

Samatrica notifies the Business **without undue delay** after becoming
aware of a personal data breach affecting the Business's data, with the
information article 33(3) requires as it becomes available, so the
Business can meet its own 72-hour notification duty.

## 9. Deletion and return

On termination of the Service, the Business may export its data for
30 days; Samatrica then deletes all personal data processed on the
Business's behalf, unless EU or member-state law requires retention.
Deletion from backups follows the backup rotation period of
[BACKUP RETENTION — to be completed].

## 10. Audits

Samatrica makes available the information necessary to demonstrate
compliance with article 28 and allows audits, at most [once a year],
with [30] days' notice, during business hours, without access to other
businesses' data, and at the Business's cost.

## 11. Transfers outside the EU

Samatrica does not transfer the data outside the EU except through the
sub-processors in Section 6, each covered by an adequacy decision or EU
standard contractual clauses. [CONFIRM EXACT MECHANISM PER SUB-PROCESSOR.]

## 12. Law

This DPA is governed by Estonian law, like the terms of service. In case
of conflict between this DPA and the terms, this DPA prevails for data
protection matters. Samatrica's lead supervisory authority is the
Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon).
