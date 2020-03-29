import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

type TermsOfServicePageProps = {};

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = () => (
  <Layout>
    <SEO />
    <>
      <PageHeader heading="Terms of Service" lead="All things T &amp; Cs" />

      <h2>Contact tracking Terms of Service</h2>
      <h3>1. Terms</h3>
      <p>
        By accessing the website at{' '}
        <a href="https://contacttracing.app">https://contacttracing.app</a>, you
        are agreeing to be bound by these terms of service, all applicable laws
        and regulations, and agree that you are responsible for compliance with
        any applicable local laws. If you do not agree with any of these terms,
        you are prohibited from using or accessing this site. The materials
        contained in this website are protected by applicable copyright and
        trademark law.
      </p>
      <h3>2. Use Licence</h3>
      <ol type="a">
        <li>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Contact tracking's website for
          personal, non-commercial transitory viewing only. This is the grant of
          a licence, not a transfer of title, and under this licence you may
          not:
          <ol type="i">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Contact tracking's website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ol>
        </li>
        <li>
          This licence shall automatically terminate if you violate any of these
          restrictions and may be terminated by Contact tracking at any time.
          Upon terminating your viewing of these materials or upon the
          termination of this licence, you must destroy any downloaded materials
          in your possession whether in electronic or printed format.
        </li>
      </ol>
      <h3>3. Disclaimer</h3>
      <ol type="a">
        <li>
          The materials on Contact tracking's website are provided on an 'as is'
          basis. Contact tracking makes no warranties, expressed or implied, and
          hereby disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </li>
        <li>
          Further, Contact tracking does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on its website or otherwise relating to such materials
          or on any sites linked to this site.
        </li>
      </ol>
      <h3>4. Limitations</h3>
      <p>
        In no event shall Contact tracking or its suppliers be liable for any
        damages (including, without limitation, damages for loss of data or
        profit, or due to business interruption) arising out of the use or
        inability to use the materials on Contact tracking's website, even if
        Contact tracking or a Contact tracking authorised representative has
        been notified orally or in writing of the possibility of such damage.
        Because some jurisdictions do not allow limitations on implied
        warranties, or limitations of liability for consequential or incidental
        damages, these limitations may not apply to you.
      </p>
      <h3>5. Accuracy of materials</h3>
      <p>
        The materials appearing on Contact tracking's website could include
        technical, typographical, or photographic errors. Contact tracking does
        not warrant that any of the materials on its website are accurate,
        complete or current. Contact tracking may make changes to the materials
        contained on its website at any time without notice. However Contact
        tracking does not make any commitment to update the materials.
      </p>
      <h3>6. Links</h3>
      <p>
        Contact tracking has not reviewed all of the sites linked to its website
        and is not responsible for the contents of any such linked site. The
        inclusion of any link does not imply endorsement by Contact tracking of
        the site. Use of any such linked website is at the user's own risk.
      </p>
      <h3>7. Modifications</h3>
      <p>
        Contact tracking may revise these terms of service for its website at
        any time without notice. By using this website you are agreeing to be
        bound by the then current version of these terms of service.
      </p>
      <h3>8. Governing Law</h3>
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of London and you irrevocably submit to the exclusive
        jurisdiction of the courts in that State or location.
      </p>
    </>
  </Layout>
);

export default TermsOfServicePage;
