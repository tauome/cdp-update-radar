export type UpdateType = 'new' | 'enhancement' | 'deprecation' | 'breaking';

export interface ProductUpdate {
  id: string;
  title: string;
  description: string;
  type: UpdateType;
  date: string;
}

export interface VendorData {
  id: string;
  name: string;
  logo: string;
  color: string;
  updates: Record<string, ProductUpdate[]>; // keyed by quarter e.g. "Q1 2025"
}

export const vendors: VendorData[] = [
  {
    id: 'adobe',
    name: 'Adobe Real-Time CDP',
    logo: 'A',
    color: 'hsl(0, 80%, 50%)',
    updates: {
      'Q4 2025': [
        { id: 'a1', title: 'Federated Audience Composition', description: 'Compose audiences using data from external warehouses without moving data into Adobe.', type: 'new', date: '2025-12-10' },
        { id: 'a2', title: 'AI Assistant for Audiences', description: 'Natural language interface to build, explore, and troubleshoot audience segments.', type: 'new', date: '2025-11-15' },
        { id: 'a3', title: 'Enhanced Partner Data Connectors', description: 'Expanded integrations with LiveRamp, Merkle, and Epsilon for second-party data activation.', type: 'enhancement', date: '2025-11-01' },
        { id: 'a4', title: 'Legacy Batch Segmentation API', description: 'Batch segmentation endpoints deprecated in favor of streaming segmentation.', type: 'deprecation', date: '2025-10-20' },
      ],
      'Q3 2025': [
        { id: 'a5', title: 'Account-Level Profiles', description: 'B2B account profiles with unified scoring and journey orchestration.', type: 'new', date: '2025-09-05' },
        { id: 'a6', title: 'Improved Identity Resolution', description: 'Graph-based identity stitching with configurable merge rules.', type: 'enhancement', date: '2025-08-12' },
      ],
      'Q2 2025': [
        { id: 'a7', title: 'Data Distiller Enhancements', description: 'SQL-based derived datasets with scheduling and alerting.', type: 'enhancement', date: '2025-06-20' },
      ],
      'Q1 2025': [
        { id: 'a8', title: 'Playbooks for Activation', description: 'Pre-built use case templates for common CDP activation patterns.', type: 'new', date: '2025-02-18' },
      ],
    },
  },
  {
    id: 'tealium',
    name: 'Tealium AudienceStream',
    logo: 'T',
    color: 'hsl(200, 80%, 45%)',
    updates: {
      'Q4 2025': [
        { id: 't1', title: 'Moments API 2.0', description: 'Real-time audience membership and visitor attributes exposed via low-latency edge API.', type: 'new', date: '2025-12-05' },
        { id: 't2', title: 'DataConnect for Snowflake', description: 'Bi-directional sync between AudienceStream and Snowflake data shares.', type: 'new', date: '2025-11-20' },
        { id: 't3', title: 'Consent Orchestration Updates', description: 'Granular purpose-based consent with automatic downstream enforcement.', type: 'enhancement', date: '2025-10-15' },
      ],
      'Q3 2025': [
        { id: 't4', title: 'Predict ML Scoring', description: 'Out-of-the-box propensity models for churn, purchase, and engagement.', type: 'new', date: '2025-09-10' },
        { id: 't5', title: 'Legacy iQ Tag Management', description: 'Classic iQ interface deprecated; migrated to new TiQ experience.', type: 'deprecation', date: '2025-08-01' },
      ],
      'Q2 2025': [
        { id: 't6', title: 'Server-Side Event Forwarding', description: 'New server-side connector framework with 50+ pre-built integrations.', type: 'enhancement', date: '2025-05-22' },
      ],
      'Q1 2025': [
        { id: 't7', title: 'Functions Marketplace', description: 'Community-contributed transformation functions for data enrichment.', type: 'new', date: '2025-03-10' },
      ],
    },
  },
  {
    id: 'salesforce',
    name: 'Salesforce Data Cloud',
    logo: 'SF',
    color: 'hsl(210, 80%, 50%)',
    updates: {
      'Q4 2025': [
        { id: 's1', title: 'Einstein Copilot for Segments', description: 'Conversational AI to create and refine segments using natural language.', type: 'new', date: '2025-12-08' },
        { id: 's2', title: 'Zero-Copy Partner Network', description: 'Access Snowflake, Databricks, and BigQuery data without ETL via zero-copy.', type: 'new', date: '2025-11-18' },
        { id: 's3', title: 'Data Cloud for Commerce', description: 'Pre-built data bundles and activation templates for Commerce Cloud.', type: 'enhancement', date: '2025-10-25' },
        { id: 's4', title: 'Legacy DMP Audience Studio', description: 'Audience Studio fully sunset; all features migrated to Data Cloud.', type: 'breaking', date: '2025-10-01' },
      ],
      'Q3 2025': [
        { id: 's5', title: 'Calculated Insights GA', description: 'Multi-dimensional metrics and KPIs computed across unified profiles.', type: 'new', date: '2025-07-15' },
        { id: 's6', title: 'Identity Resolution 2.0', description: 'Probabilistic and deterministic matching with confidence scoring.', type: 'enhancement', date: '2025-08-20' },
      ],
      'Q2 2025': [
        { id: 's7', title: 'Data Actions Framework', description: 'Trigger flows, automations, and API calls based on segment membership changes.', type: 'new', date: '2025-04-30' },
      ],
      'Q1 2025': [
        { id: 's8', title: 'Unified Profile Explorer', description: 'Visual profile inspector with timeline, attributes, and segment membership.', type: 'enhancement', date: '2025-01-25' },
      ],
    },
  },
  {
    id: 'segment',
    name: 'Twilio Segment',
    logo: 'S',
    color: 'hsl(155, 65%, 42%)',
    updates: {
      'Q4 2025': [
        { id: 'sg1', title: 'Linked Profiles', description: 'Entity relationships (accounts, households) modeled directly in Unify.', type: 'new', date: '2025-12-12' },
        { id: 'sg2', title: 'Reverse ETL GA', description: 'Sync warehouse tables to 400+ downstream destinations on schedule.', type: 'enhancement', date: '2025-11-05' },
        { id: 'sg3', title: 'Protocol Enforcement v2', description: 'Schema validation with auto-blocking of non-compliant events.', type: 'enhancement', date: '2025-10-18' },
      ],
      'Q3 2025': [
        { id: 'sg4', title: 'Generative Audiences', description: 'Describe an audience in natural language and Segment builds the query.', type: 'new', date: '2025-09-22' },
      ],
      'Q2 2025': [
        { id: 'sg5', title: 'Edge Functions', description: 'Run custom JavaScript at the edge before data reaches destinations.', type: 'new', date: '2025-06-14' },
        { id: 'sg6', title: 'Personas SQL Traits', description: 'Define computed traits using SQL against your connected warehouse.', type: 'enhancement', date: '2025-05-10' },
      ],
      'Q1 2025': [
        { id: 'sg7', title: 'Privacy Portal', description: 'Centralized data subject request management with automated fulfillment.', type: 'new', date: '2025-02-28' },
      ],
    },
  },
  {
    id: 'mparticle',
    name: 'mParticle',
    logo: 'mP',
    color: 'hsl(270, 60%, 55%)',
    updates: {
      'Q4 2025': [
        { id: 'm1', title: 'Cortex AI Predictions', description: 'Embedded ML predictions for LTV, churn risk, and next-best-action.', type: 'new', date: '2025-12-01' },
        { id: 'm2', title: 'Data Planning 2.0', description: 'Collaborative data governance with versioned schemas and approval workflows.', type: 'enhancement', date: '2025-11-10' },
      ],
      'Q3 2025': [
        { id: 'm3', title: 'Warehouse Sync', description: 'Bi-directional sync with Snowflake, BigQuery, and Redshift.', type: 'new', date: '2025-09-15' },
        { id: 'm4', title: 'Legacy Firehose API', description: 'Firehose v1 deprecated in favor of new streaming export API.', type: 'deprecation', date: '2025-08-05' },
      ],
      'Q2 2025': [
        { id: 'm5', title: 'SmartType Transformations', description: 'No-code data transformation rules applied at ingestion time.', type: 'enhancement', date: '2025-06-01' },
      ],
      'Q1 2025': [
        { id: 'm6', title: 'Cross-Workspace Audiences', description: 'Share audience definitions across multiple mParticle workspaces.', type: 'new', date: '2025-03-20' },
      ],
    },
  },
];

export const quarters = ['Q4 2025', 'Q3 2025', 'Q2 2025', 'Q1 2025'];

export const updateTypeConfig: Record<UpdateType, { label: string; className: string }> = {
  new: { label: 'New Feature', className: 'bg-update-new-bg text-update-new' },
  enhancement: { label: 'Enhancement', className: 'bg-update-enhancement-bg text-update-enhancement' },
  deprecation: { label: 'Deprecation', className: 'bg-update-deprecation-bg text-update-deprecation' },
  breaking: { label: 'Breaking Change', className: 'bg-update-breaking-bg text-update-breaking' },
};
