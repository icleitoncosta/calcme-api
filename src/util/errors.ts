/*!
 * Copyright 2022 Saturno Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export class CmError extends Error {
    constructor(
      readonly code: string,
      message: string,
      extra: { [key: string]: any } = {}
    ) {
      super(message);
  
      if (extra) {
        const keys = Object.keys(extra);
        for (const key of keys) {
          (this as any)[key] = extra[key];
        }
      }
    }
  }
