import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const query = graphql`
  query PrimaryNav {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`;

interface QueryResult {
  navigation: {
    nodes: {
      name: string;
      link: string;
    }[];
  };
}

const isPartiallyActive = ({
  isPartiallyCurrent
}: {
  isPartiallyCurrent: boolean;
}) =>
  isPartiallyCurrent
    ? { className: 'navlink-active navlink' }
    : { className: 'navlink' };

const PartialNavLink = ({
  children,
  to,
  ...rest
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
);

const PrimaryNav: React.FC = () => {
  const {
    navigation: { nodes }
  } = useStaticQuery<QueryResult>(query);

  return (
    <ul>
      {nodes.map(item => (
        <li key={item.name}>
          <PartialNavLink to={item.link}>{item.name}</PartialNavLink>
        </li>
      ))}
    </ul>
  );
};

export default PrimaryNav;
