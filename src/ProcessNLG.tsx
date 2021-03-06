import React from 'react';

export const nlg_result = `
<p>
<h4><strong><span style="color: rgb(0, 0, 255);">Performance highlights</span></strong></h4>
<p><strong>Global Growth Fund</strong> Class A shares at net asset value (NAV) <strong>increased</strong> during the
quarter <strong>but</strong> <strong><span style="color: rgb(255, 0, 0);">underperformed</span></strong> the
benchmark.</p>
<h4><strong><span style="color: rgb(0, 0, 255);">Contributors to performance</span></strong></h4>
<p>
<p>- <strong>Stronger stock selection and an</strong> <strong></strong> <strong>underweight</strong> (2.34%) position in
Consumer Staples, a relatively weak performer in the benchmark, added to relative returns. The fund&rsquo;s
<strong><strong></strong></strong></strong></strong> stocks showed particular strength. An overweight (3.82%) in the
positive performing Financials sector added to relative returns as well.</p>
<p>- Geographically, stronger stock selection in Korea, Netherlands, Germany and Spain added to relative return.
Additionally, an overweight position in the positive performing Korean market also added to relative return.</p>
<p>- <strong><strong>Swedish-</strong></strong>based <strong><strong><strong><strong>Multi-Sector
        Holdings&nbsp;</strong></strong></strong></strong>company <strong>INVESTOR AB INVEB</strong> was the leading
individual contributor for the quarter.</p>
</p>
<h4><strong><span style="color: rgb(0, 0, 255);">Detractors from performance</span></strong></h4>
<p>
<p>- <strong>Weaker stock selection <strong>and an</strong></strong> overweight (14.59%) in the positive performing
Information Technology sector added to relative returns. Within Information Technology, holdings in the Diversified
Banks , Multi-Sector Holdings and Life & Health Insurance stocks showed particular weakness. An underweight (3.45%)
position in Communication Services, a relatively weak performer in the benchmark, added to relative returns as well.
In the Communication Services sector, the <strong><strong>Interactive Media &amp; Services and Cable &amp;
    Satellite</strong></strong></strong> stocks showed particular strength.</p>
<p>- Geographically, weaker stock selection in Japan, Australia and Kenya detracted from relative return. Additionally,
an underweight position in S.Africa , the benchmark&#39;s top performing market over the quarter, along with an
overweight position in the relatively weak Kenyan market also negatively impacted relative returns.</p>
<p>- <strong><strong>Swedish-</strong></strong>based <strong><strong><strong><strong>Multi-Sector
        Holdings&nbsp;</strong></strong></strong></strong>company <strong>INVESTOR AB INVEB</strong> was one of the
largest individual detractors for the quarter.</p>
</p>
<h4><strong><span style="color: rgb(0, 0, 255);">Positioning and outlook</span></strong></h4>
<p>
<p>- We did not add any new stocks to the portfolio this quarter.</p>
<p>- We did not close any positions this quarter.</p>
<p>- At quarter end, the portfolio&rsquo;s largest overweight positions compared to the Global Growth Fund Index were in
the Information Technology, Financials, Industrials and Energy sectors, while the primary underweights were in
Consumer Discretionary, Materials, Health Care and Communication Services.</p>
</p>
<p><br></p>
<p><br><br>
</p>
`;

function ProcessNLG() {
  return <div dangerouslySetInnerHTML={{ __html: nlg_result }}></div>;
}

export default ProcessNLG;
