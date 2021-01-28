import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import RuleBuilderEditor from './RuleBuilderEditor';

const columns = [
  { id: 'column1', name: 'Column 1' },
  { id: 'column2', name: 'Column 2' },
  { id: 'column3', name: 'Column 3' },
];

const TEST_TREE_DATA = {
  id: '14p5ho3pcu',
  groupLogic: 'ALL',
  rules: [
    {
      id: 'rsiru4rjba',
      column: 'column1',
      logic: 'EQ',
      value: '45',
    },
    {
      id: '34bvyub9jq',
      column: 'column2',
      logic: 'LT',
      value: '14',
    },
    {
      id: 'i34imt0geh',
      groupLogic: 'ANY',
      rules: [
        {
          id: 'ewc2z5kyfu',
          column: 'column2',
          logic: 'GTOET',
          value: '46',
        },
        {
          id: 'hks7h2zin4',
          column: 'column1',
          logic: 'LT',
          value: '45',
        },
        {
          id: 'qzn8477mbg',
          groupLogic: 'ALL',
          rules: [
            {
              id: 'wg9hlv197c',
              column: '',
              logic: 'EQ',
              value: '',
            },
            {
              id: 'eobo3s5tie',
              groupLogic: 'ALL',
              rules: [
                {
                  id: '7kadk2wfv8',
                  column: 'column1',
                  logic: 'EQ',
                  value: '44',
                },
                {
                  id: '49mf09vjhn',
                  column: 'column2',
                  logic: 'EQ',
                  value: '46',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const RuleBuilderEditorStory = () => (
  <RuleBuilderEditor columns={columns} defaultRules={TEST_TREE_DATA} />
);

RuleBuilderEditorStory.story = {
  name: 'Rule Builder Editor (Experimental)',
};

export default {
  title: 'Watson IoT Experimental/RuleBuilder',
  decorators: [withKnobs],

  parameters: {
    component: RuleBuilderEditor,
  },
};
