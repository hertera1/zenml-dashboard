import { fetchApiWithAuthRequest } from '../fetchApi';
import { endpoints } from '../endpoints';
import { httpMethods } from '../constants';
import { apiUrl } from '../apiUrl';

const getStackComponentTypesApi = ({
  authenticationToken,
}: {
  authenticationToken: string;
}): Promise<TStack> =>
  fetchApiWithAuthRequest({
    url: apiUrl(endpoints.StackComponents.types),
    method: httpMethods.get,
    authenticationToken,
  });

export default getStackComponentTypesApi;
