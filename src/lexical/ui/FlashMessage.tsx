/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import './FlashMessage.css';

export interface FlashMessageProps {
  children: ReactNode;
}

export default function FlashMessage({ children }: FlashMessageProps) {
  return createPortal(
    <div className='FlashMessage__overlay' role='dialog'>
      <p className='FlashMessage__alert' role='alert'>
        {children}
      </p>
    </div>,
    document.body,
  );
}
