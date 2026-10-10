# Data Processing Agreement — DRAFT

> **Status: draft for legal review, 10 October 2026. Not yet binding. The
> bracketed items must be completed before this document is used.**
> Provided to each business ("the Business") together with the Samatrica
> terms of service, of which it forms part.

## 1. Parties and roles

This Data Processing Agreement ("DPA") is between the Business (the
**controller**) and Adenium Consultancy - F.Z.E, a free zone
establishment licensed by the Free Zones Authority of Ajman under licence
no. 32555, TRN 104836129700001, registered address FL.H-01582, C1
Building, Ajman Free Zone, Ajman, United Arab Emirates, which operates
Samatrica ("Samatrica", the **processor**), for the personal data Samatrica
processes on the Business's behalf when providing the Samatrica service
(AI chat assistant, appointment requests and dashboard — "the Service").

In this DPA, "data protection law" means the UAE Federal Decree-Law No. 45
of 2021 on the Protection of Personal Data and, where it applies to the
Business, the EU General Data Protection Regulation ("GDPR"). References to
GDPR articles describe the corresponding obligation under whichever data
protection law applies.

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
the AI model run by Samatrica itself on servers in the European Union,
without sharing conversations with any AI company; encryption in transit
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
| Amazon Web Services EMEA SARL | Hosting of the Service and its database; sending of verification codes and notifications by email (Amazon SES) | EU (Frankfurt) |
| RunPod [CONFIRM CONTRACTING ENTITY] | GPU servers on which Samatrica runs its own AI model to generate assistant replies; RunPod does not use the data and no model is trained on it | EU data centres only [CONFIRM REGION LOCK; RUNPOD DPA; US PARENT: SCCs / DPF] |

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

## 9. Deletion and return

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
sub-processors in Section 6. Samatrica's personnel operate the Service
from the United Arab Emirates. Where the GDPR applies to the Business,
this access is a transfer outside the EU, and the parties sign the EU
standard contractual clauses (module 2, controller to processor) before
any processing begins.

## 12. Law

This DPA is governed by the federal laws of the United Arab Emirates as
applied in the Emirate of Ajman, like the terms of service. In case of
conflict between this DPA and the terms, this DPA prevails for data
protection matters.
