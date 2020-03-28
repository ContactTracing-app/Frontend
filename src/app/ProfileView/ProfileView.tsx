import * as React from 'react';
import PageHeader from '../../components/PageHeader';
import RiskLevelIndicator from '../../components/RiskLevelIndicator';

const ProfileView = () => (
  <>
    <PageHeader heading="Profile" lead="Keep track of your updates." />
    <RiskLevelIndicator uid="abc" />
  </>
);

export default ProfileView;
