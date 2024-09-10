import * as mirrorboards from "@mirrorboards/pulumi";
import { Namespace } from "@mirrorboards/namespace";
import { ovh } from './env';

/**
 *
 * Important notice:
 *
 * Each instance of RSquaredWitnessOVH will bootstrap its own Kubernetes (k8s) cluster.
 * To prevent exceeding cloud provider quotas and to avoid potential issues such as being
 * flagged as a malicious actor, we strongly recommend chaining the witness deployments
 * using the dependsOn: [] property. This will ensure that clusters are created sequentially,
 * one after the other.
 *
 * If you plan to bootstrap multiple witnesses, we suggest adding each witness configuration
 * individually and triggering the bootstrap action sequentially, as shown below:
 *
 * [witness_a] => trigger bootstrap action => [witness_b] => trigger bootstrap action => [witness_c] => trigger bootstrap action
 *
 * This approach will help maintain smooth operations and prevent any quota-related issues.
 *
 *
*/

const namespace = new Namespace('witness');

export const witness_A = new mirrorboards.blockchain.rsquared.RSquaredWitnessOVH(namespace.get('witness_A'), {
  witness_id: '0.0.0',
  witness_name: 'witness-a',
  witness_network: 'RQRX',
  provider: { ovh },
}, { dependsOn: [] });

export const witness_B = new mirrorboards.blockchain.rsquared.RSquaredWitnessOVH(namespace.get('witness_B'), {
  witness_id: '1.1.1',
  witness_name: 'witness-b',
  witness_network: 'RQRX',
  provider: { ovh }
}, { dependsOn: [witness_A] });

export const witness_C = new mirrorboards.blockchain.rsquared.RSquaredWitnessOVH(namespace.get('witness_C'), {
  witness_id: '2.2.2',
  witness_name: 'witness-c',
  witness_network: 'RQRX',
  provider: { ovh }
}, { dependsOn: [witness_B] });
