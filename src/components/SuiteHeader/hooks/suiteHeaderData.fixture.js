const fixture = {
  '/profile': {
    user: {
      added: { id: 'mas-admin', timestamp: '2020-04-01Z16:01:00' },
      updated: { id: 'mas-admin', timestamp: '2020-08-24T17:03:41Z' },
      sync: { status: 'SUCCESS', timestamp: '2020-08-24T17:03:41Z' },
      displayName: 'Test Admin',
      email: 'testadmin@ibm.com',
      issuer: 'MAS',
      username: 'mas-admin',
      entitlement: { application: 'PREMIUM', admin: 'ADMIN_PREMIUM' },
      permissions: { systemAdmin: true, userAdmin: true },
      workspaces: {
        mockedworkspace: {
          permissions: { workspaceAdmin: true },
          url: 'https://api.myenv.mydomain.com/workspaces/mockedworkspace',
          applications: {
            monitor: { role: 'ADMIN', href: 'https://mockedworkspace.monitor.mydomain.com/' },
            iot: {
              role: 'ADMIN',
              href: 'https://mockedworkspace.iot.mydomain.com/ibmssologin',
            },
            health: {
              role: 'ADMIN',
              href: 'https://mockedworkspace.health.mydomain.com/maximo',
            },
            predict: {
              role: 'ADMIN',
              href: 'https://mockedworkspace.health.mydomain.com/maximo',
            },
          },
        },
      },
      applications: {
        iot: { sync: { state: 'SUCCESS', timestamp: '2020-08-24T17:03:41Z' } },
        monitor: { sync: { state: 'SUCCESS', timestamp: '2020-08-24T17:03:41Z' } },
        health: { sync: { state: 'SUCCESS', timestamp: '2020-08-24T17:03:41Z' } },
        predict: { sync: { state: 'SUCCESS', timestamp: '2020-08-24T17:03:41Z' } },
      },
    },
    workspaces: [
      {
        id: 'mockedworkspace',
        name: 'Mocked Workspace',
        added: { id: 'mas-superuser', timestamp: '2020-08-24T11:56:12-05:00' },
        updated: { id: 'mas-superuser', timestamp: '2020-08-24T11:56:12-05:00' },
        sync: { status: 'SUCCESS', timestamp: '2020-08-24T11:56:12-05:00' },
        config: {},
      },
    ],
  },
  '/applications': [
    {
      id: 'iot',
      category: 'tool',
      deployed: true,
      deployedVersion: '8.0.0',
      deployedSpec: { test: { foo: 'bar' } },
      components: [
        {
          name: 'devops',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'mbgx',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'datapower',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'logmet',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'orgmgmt',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'auth',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'provision',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'registry',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'mfgx',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'model',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'state',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'actions',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'dm',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'guardian',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
        {
          name: 'webui',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:48-05:00',
        },
      ],
      entitlement: 'LIMITED',
      supportedReleases: [
        {
          config: [
            { id: 'mongo', required: true, scope: 'SYSTEM' },
            { id: 'kafka', required: true, scope: 'SYSTEM' },
            { id: 'jdbc', required: true, scope: 'SYSTEM' },
            { id: 'pagerduty', required: false, scope: 'SYSTEM' },
            { id: 'slack', required: false, scope: 'SYSTEM' },
          ],
          integratesWith: [
            { appId: 'monitor', required: false, supportedReleases: ['8.0', '8.1'] },
          ],
          versions: ['8.0.0', '8.0.1-pre.fvt', '8.0.1'],
          release: '8.0',
        },
        {
          config: [
            { id: 'mongo', required: true, scope: 'system' },
            { id: 'kafka', required: true, scope: 'system' },
            { id: 'jdbc', required: true, scope: 'system' },
            { id: 'pagerduty', required: false, scope: 'system' },
            { id: 'slack', required: false, scope: 'system' },
          ],
          integratesWith: [
            { appId: 'monitor', required: false, supportedReleases: ['8.0', '8.1'] },
          ],
          versions: ['8.1.0-pre.dev81', '8.1.0'],
          release: '8.1',
        },
      ],
    },
    {
      id: 'monitor',
      category: 'application',
      deployed: true,
      deployedVersion: '8.1.0',
      deployedSpec: { test: { foo: 'bar' } },
      components: [
        {
          name: 'monitor',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:02:53-05:00',
        },
      ],
      entitlement: 'LIMITED',
      supportedReleases: [
        {
          config: [
            { id: 'jdbc', required: true, scope: 'system' },
            { id: 'slack', required: false, scope: 'system' },
          ],
          integratesWith: [{ appId: 'iot', required: true, supportedReleases: ['8.0', '8.1'] }],
          versions: ['8.0.0-pre.fvt', '8.0.0'],
          release: '8.0',
        },
        {
          config: [
            { id: 'jdbc', required: true, scope: 'SYSTEM' },
            { id: 'slack', required: false, scope: 'SYSTEM' },
          ],
          integratesWith: [{ appId: 'iot', required: true, supportedReleases: ['8.0', '8.1'] }],
          versions: ['8.1.0-pre.dev81', '8.1.0'],
          release: '8.1',
        },
      ],
    },
    {
      id: 'health',
      category: 'application',
      deployed: true,
      deployedVersion: '8.0.0',
      deployedSpec: { test: { foo: 'bar' } },
      components: [
        {
          name: 'health',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:03:05-05:00',
        },
      ],
      entitlement: 'BASE',
      supportedReleases: [
        {
          config: [
            { id: 'jdbc', required: true, scope: 'workspace-application' },
            { id: 'slack', required: false, scope: 'system' },
          ],
          integratesWith: [
            { appId: 'monitor', required: false, supportedReleases: ['8.0', '8.1'] },
            { appId: 'predict', required: false, supportedReleases: ['8.0'] },
          ],
          versions: ['8.0.0-pre.stable', '8.0.0-pre.dev', '8.0.0-pre.fvt', '8.0.0'],
          release: '8.0',
        },
      ],
    },
    {
      id: 'predict',
      category: 'application',
      deployed: true,
      deployedVersion: '8.0.0',
      deployedSpec: { test: { foo: 'bar' } },
      components: [
        {
          name: 'predict',
          version: '8.0.0',
          state: 'DEPLOYED',
          timestamp: '2020-08-24T12:03:08-05:00',
        },
      ],
      entitlement: 'PREMIUM',
      supportedReleases: [
        {
          config: [
            { id: 'jdbc', required: true, scope: 'system' },
            { id: 'slack', required: false, scope: 'system' },
          ],
          integratesWith: [
            { appId: 'health', required: true, supportedReleases: ['8.0'] },
            { appId: 'monitor', required: true, supportedReleases: ['8.0', '8.1'] },
          ],
          versions: ['8.0.0-pre.stable', '8.0.0-pre.fvt', '8.0.0'],
          release: '8.0',
        },
      ],
    },
  ],
  '/config/eam': {
    url: 'https://myeam.mydomain.com',
    creationTimestamp: '2020-08-24T11:56:12-05:00',
  },
  '/users/mas-admin/surveys/suite': {
    id: 'suite',
    delayIntervalDays: 30,
    frequencyDays: 90,
    enabled: true,
    initialInteractionTimestamp: '2020-01-15T19:32:52Z',
    lastPromptTimestamp: '2020-02-22T17:15:28Z',
    userId: 'mas-admin',
  },
  '/users/mas-admin/surveys': {
    id: 'suite',
    delayIntervalDays: 30,
    frequencyDays: 90,
    enabled: true,
    initialInteractionTimestamp: '2020-06-15T19:32:52Z',
    lastPromptTimestamp: '2020-08-22T17:15:28Z',
    userId: 'mas-admin',
  },
};

export default fixture;