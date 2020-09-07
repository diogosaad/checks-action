import {RestEndpointMethodTypes} from '@octokit/rest';

export type Args = {
  name: string;
  token: string;
  conclusion?: Conclusion;
  status: Status;

  actionURL: string;

  output?: Output;
  annotations?: Annotations;
  images?: Images;
  actions?: Actions;
};

// ChecksCreateParamsOutputAnnotations[]
export type Annotations = NonNullable<
  NonNullable<RestEndpointMethodTypes['checks']['create']['parameters']['output']>['annotations']
>;

// ChecksCreateParamsOutputImages[]
export type Images = NonNullable<
  NonNullable<RestEndpointMethodTypes['checks']['create']['parameters']['output']>['images']
>;

// ChecksCreateParamsActions[]
export type Actions = NonNullable<RestEndpointMethodTypes['checks']['create']['parameters']['actions']>;

export type Output = {
  summary: string;
  text_description?: string;
};

export enum Conclusion {
  Success = 'success',
  Failure = 'failure',
  Neutral = 'neutral',
  Cancelled = 'cancelled',
  TimedOut = 'timed_out',
  ActionRequired = 'action_required',
}

export enum Status {
  Queued = 'queued',
  InProgress = 'in_progress',
  Completed = 'completed',
}
