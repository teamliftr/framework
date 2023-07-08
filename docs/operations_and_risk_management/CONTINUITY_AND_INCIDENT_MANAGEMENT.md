# 3.3 Continuity & Incident Management
All systems experience disruptions, and most teams will eventually experience serious disruptions at least once over the lifespan of a product or service. Regardless of whether a disruption is caused by human factors, a technical error, or an outside attack—the ability to mitigate, rapidly respond to, and recover from disruptions, is a crucial team competency. 

## 3.3.1 System Monitoring
Level: `Basic`

**Your team actively monitors its product/service for potential failures and maintains targets for its mean time-to-detect (MTTD) failures and identify their cause. Those targets are consistently met, and the team’s MTTD is steadily decreasing.**

Your team needs to be able to rapidly detect system failures in order to ensure that your product or service will provide strong, consistent, customer value. As such, your team should have clear monitoring goals that are designed to continuously reduce the team’s MTTD to as short a period as is reasonably practicable.

## 3.3.2 Incident Response
Level: `Basic`

**There is a set process for handling high priority bugs and other production incidents. This process works well, and it is reviewed, updated and improved at regular intervals.**

A defined process for responding to bugs is necessary for teams to be able to identify, prioritize and respond to critical issues before they cause significant damage. This process should enable classification of bugs and incidents according to both severity and priority, and must be understood by every member of the team.

## 3.3.3 Bus Factor
Level: `Basic`

**Critical operational skills and knowledge are not held by just one member of the team. The team can avoid major disruptions in the event that a team member unexpectedly becomes unavailable.**

A team’s “Bus Factor” — the number of people it can lose without losing the ability to develop or maintain a key feature — is a crucial measure of its robustness. Pair programming, code reviews, coaching, and assigning co-owners to key features are techniques that can help ensure that multiple team members hold all key skills.

## 3.3.4 Impact Mitigation
Level: `Intermediate`

**Your team’s products and services are designed to gracefully degrade when partial failures occur. This means that if one service goes down, the others will remain operable.**

Designing systems to gracefully degrade and remain available in the event of partial failures is a necessary risk mitigation activity. Maximizing system availability isn’t just about avoiding failures, it’s also about ensuring that any which do occur will have minimal impact.

## 3.3.5 Disaster Recovery (DR) Readiness
Level: `Intermediate`

**In the event of a disruption to your product’s availability, your team knows what resources are necessary to restore service, and has prepared a plan to do so in a timely manner.**

Minimizing the impact of disruptions is necessary to maximize customer value. To do this, it is necessary to plan in advance how to restore services in the event of an outage. These plans should include reasonable estimates of the costs and time that will be necessary to restore services in different scenarios.

| Suggested metric | Description |
|:-----------------|:------------|
| Time to Restore | For a specific application/service, how long does it generally take to restore service when a service incident or a defect that impacts users occurs? |

## 3.3.6 Software Robustness
Level: `Advanced`

**Your team sets ambitious targets for how robust its software should be. Your team regularly measures its software’s robustness by subjecting it to stressful or irregular conditions.**

Users often expose their software to stressful or invalid conditions not anticipated by developers. It’s important to ensure your software is robust enough to prevent exposure to such conditions from causing critical failures. Testing and improving your software’s robustness should be a key quality management activity.
