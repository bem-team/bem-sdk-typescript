// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { BemSDK } from '../client';

export abstract class APIResource {
  protected _client: BemSDK;

  constructor(client: BemSDK) {
    this._client = client;
  }
}
