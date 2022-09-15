/* eslint-disable */
import React, { useState } from 'react';
import { translate } from './translate';
import {
  Box,
  FlexBox,
  FormEmailField,
  CopyField,
  H3,
  Paragraph,
} from '../../../components';
import { Popup } from '../../common/Popup';

export const TokenPopup: React.FC<{
  id: string,
  email: string,
  activationToken: string,
  role: string
}> = ({ id, email, activationToken, role }) => { 
  
  const [openPopup, setPopupOpen] = useState(false)

  return (
    <>
      <Paragraph style={{ color:'#8045FF', cursor: 'pointer' }} onClick={() => setPopupOpen(true)} >{role}</Paragraph>    
      {openPopup && (
        <Popup onClose={() => setPopupOpen(false)}>
          <FlexBox.Row alignItems="center" justifyContent="space-between">
            <H3 bold color="darkGrey">{translate('popup.invite.text')}</H3>
          </FlexBox.Row>
          
          <Box marginTop="md">         
            <FlexBox.Row marginBottom="md">
              <Box>
                <FormEmailField
                  label={translate('popup.email.label')}
                  placeholder={translate('popup.email.placeholder')}
                  value={email}
                  disabled
                />
              </Box>
            </FlexBox.Row>
            <Box marginTop='lg'>
              <CopyField
                label={`Invitation Link - please send this to ${email} for this user to finish their registration`}
                value={`${process.env.REACT_APP_BASE_API_URL_LIVE}/signup?user=${id}&token=${activationToken}`}
                disabled
              />
            </Box>  
          </Box>
        </Popup>
    )}
  </>
  );
};