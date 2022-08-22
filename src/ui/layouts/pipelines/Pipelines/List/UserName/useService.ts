import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../../../../redux/actions';
import { userSelectors } from '../../../../../../redux/selectors';

interface ServiceInterface {
  fetching: boolean;
  user: TUser;
}

export const useService = ({
  pipeline,
}: {
  pipeline: TPipeline;
}): ServiceInterface => {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState<boolean>(false);

  const user = useSelector(userSelectors.userForId(pipeline.userId));

  useEffect(() => {
    setFetching(true);
    dispatch(
      userActions.userForId({
        userId: pipeline.userId,
        onSuccess: () => setFetching(false),
        onFailure: () => setFetching(false),
      }),
    );
  }, [pipeline.id]);

  return { fetching, user };
};
