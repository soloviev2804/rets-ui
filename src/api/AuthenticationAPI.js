import axios from 'axios';
import * as c from './Constants';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  onLogin: async payload => {
    const URL = `${c.API_URL}/flowable-rest/service/runtime/process-instances`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
  onCheckRequest: async processInstanceId => {
    const URL = `${c.API_URL}/flowable-rest/service/history/historic-variable-instances?processInstanceId=${processInstanceId}&variableName=form_acceleratorManagerApproval_outcome`;
    try {
      const { data } = await axios(URL, {
        method: 'GET',
        headers: {},
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
};
