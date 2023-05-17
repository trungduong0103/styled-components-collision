import React from 'react';
import PARCEL_STAGE from './parcelStage.constants';
import PARCEL_ISSUE from './parcelIssue.constants';
import PpProgressIndicatorForward from './index';

const PROGRESS_ITEM_THEMES = {
  past: {
    iconBgColor: '#E9F3FF',
    iconColor: '#fff',
    labelColor: '#AAAAAA',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
  current: {
    iconBgColor: '#14A6DE',
    iconColor: '#fff',
    labelColor: '#000',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
  future: {
    iconBgColor: '#EDEDED',
    iconColor: '#fff',
    labelColor: '#BFBFBF',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
  issue: {
    iconBgColor: '#F44336',
    iconColor: '#fff',
    labelColor: '#000',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
};

const translation = (key) => key.replaceAll('_', ' ');

export const HasCustomStage = () => (
  <PpProgressIndicatorForward
    progressItemThemes={PROGRESS_ITEM_THEMES}
    translation={translation}
    stage={PARCEL_STAGE.customs}
    hasCustomsStage
  />
);

export const HideCustomStage = () => (
  <PpProgressIndicatorForward
    progressItemThemes={PROGRESS_ITEM_THEMES}
    translation={translation}
    stage={PARCEL_STAGE.customs}
    hasCustomsStage
    isHideCustomsPhase
  />
);

export const IssueStage = () => (
  <PpProgressIndicatorForward
    progressItemThemes={PROGRESS_ITEM_THEMES}
    translation={translation}
    stage={PARCEL_STAGE.out_for_delivery}
    issueState={PARCEL_ISSUE.hasIssue}
  />
);

export const SelectedTheme = () => (
  <PpProgressIndicatorForward
    progressItemThemes={PROGRESS_ITEM_THEMES}
    translation={translation}
    stage={PARCEL_STAGE.out_for_delivery}
    issueState={PARCEL_ISSUE.hasIssue}
    selectedTheme="future"
  />
);

export default {
  title: 'PpProgressIndicatorForward',
};
