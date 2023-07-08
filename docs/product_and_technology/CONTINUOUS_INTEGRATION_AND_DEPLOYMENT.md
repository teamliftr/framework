# 1.3 Continuous Integration & Deployment
As soon as a service is deployed into production, the ability to maintain an effective CI/CD workflow becomes the single most important determinant of that service’s long-term sustainability. While an effective regime doesn’t guarantee that a service will be successful, a lack of one all-but-guarantees it won’t be.

## 1.3.1 Deployment Automation Practices
Level: `Basic`

**Your team deploys new features and fixes to its products throughout their entire lifespan. Each product or service is purposefully designed so that deployments can be primarily managed through automation.**

A well-designed CI/CD pipeline ensures that services can be scaled without compromising performance, and is necessary for products to retain their value long-term. To reduce the time/cost of each release cycle, products should be designed so that most deployments can be automated. If a product’s deployments are difficult to automate, the amount of work necessary to address this issue should be considered part of the project’s overall technical debt. 

| Suggested metric | Description |
|:-----------------|:------------|
| Lead Times for Changes | For a specific application or service, how long does it take to go from code committed to code successfully running in production? |

## 1.3.2 Iterative Workflow
Level: `Basic`

**Your team consistently follows a development model that emphasizes fast releases with few changes per-release. Updates are deployed in small, iterative batches.**

An effective release strategy combines an iterative approach with short cycle times. Focusing on small, iterative batches minimizes the risk associated with deployments, in-turn making it easier to deliver continuous value to customers.

| Suggested metric | Description |
|:-----------------|:------------|
| Deployment Frequency | For a specific application or service, how often is code deployed to production or released to end users? |

## 1.3.3 Change Failure Rate
Level: `Basic`

**Your team has a low failure rate when updating its systems. When failures do occur the team always publicizes and logs them, along with their cause and solution, in order to prevent recurrences.**

A low-update failure rate is needed to minimize cycle-times and maximize value delivery. When failures do occur, the use of a formal incident capture and resolution system is needed to ensure that all relevant teams learn from the incident. In this context, incident capture acts as both a risk-mitigation activity and a continuous improvement process.

| Suggested metric | Description |
|:-----------------|:------------|
| Change Failure Rate | For a specific application or service, what percentage of changes to production or releases to users result in degraded service and require remediation? |

## 1.3.4 Resource Accessibility
Level: `Intermediate`

**Your team can always access the resources it needs to operate its services in testing, staging, and production environments. These resources can be accessed on-demand, ideally via self-service methods.**

In a true DevOps environment, teams should be responsible for running the operations of the products and services they are responsible for developing. This means both that they have the internal capacity to run these operations autonomously, and that their organization supports them by ensuring they have ready access to the resources that they need to do so.

## 1.3.5 Deployment Efficiency
Level: `Intermediate`

**Your team has the ability to release on-demand and quickly rollback deployments when necessary. Improving the efficiency of your deployments is an ongoing goal, not a fixed target.**

The ability to deploy on a short cycle-time requires the ability to minimize the risks associated with any deployment. Smaller deployments, the use of feature flags, and the ability to easily rollback deployments when a problem does occur are all risk-reduction traits that enable quick turnaround on deployments.

## 1.3.6 Partial Deployments
Level: `Advanced`

**Your team is able to perform time-limited deployments to partial segments of production traffic (aka: canarying) in order to minimize the risk and impact of potential defects.**

Canarying is a risk management technique that reduces the total impact a release problem can have on your customer base. Effective use of canarying allows teams to keep deployment cycles short and low-risk at the same time. Canarying is often paired with the use of feature flags in order to allow new features to be activated and deactivated without the release of new code.
