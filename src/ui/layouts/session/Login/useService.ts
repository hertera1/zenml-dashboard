import { useState } from 'react';
import { toasterTypes } from '../../../../constants';
import {
  organizationActions,
  showToasterAction,
  userActions,
  workspacesActions,
} from '../../../../redux/actions';
import { loginAction } from '../../../../redux/actions/session/loginAction';
import { useDispatch } from '../../../hooks';
import { translate } from './translate';

interface ServiceInterface {
  login: () => void;
  hasSubmittedWithErrors: boolean;
  email: string;
  setEmail: (password: string) => void;
  password: string;
  setPassword: (password: string) => void;
  loading: boolean;
}

export const useService = (): ServiceInterface => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasSubmittedWithErrors, setHasSubmittedWithErrors] = useState(false);

  const dispatch = useDispatch();

  return {
    login: () => {
      setLoading(true);
      setHasSubmittedWithErrors(true);
      if (email.trim() !== '' && password.trim() !== '') {
        dispatch(
          loginAction({
            password,
            email,
            onFailure: (errorText) => {
              dispatch(
                showToasterAction({
                  description: errorText,
                  type: toasterTypes.failure,
                }),
              );
              setLoading(false);
            },
            onSuccess: () => {
              dispatch(
                showToasterAction({
                  description: translate('toasts.successfulLogin.text'),
                  type: toasterTypes.success,
                }),
              );
              dispatch(workspacesActions.getMy({}));
              dispatch(organizationActions.getMy());
              dispatch(userActions.getMy({}));
            },
          }),
        );
      }
    },
    hasSubmittedWithErrors,
    email,
    setEmail,
    password,
    setPassword,
    loading,
  };
};
