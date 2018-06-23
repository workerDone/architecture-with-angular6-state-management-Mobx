import { TeamAggregatedModel } from '../../../modules/teams/models/team-aggregated/team-aggregated.model';

export type SignatureFnTeamsSortByType = (a: TeamAggregatedModel, b: TeamAggregatedModel) => number;
