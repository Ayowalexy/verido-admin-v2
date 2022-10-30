import axios from "axios";
import urls from "./routes";
import { httpGet, httpDelete, httpPatch, httpPost } from "./calls";
import { businessProps, consultantProps, newBusinessProps, subProps } from "../components/types";

type dataType = {
  data?: any;
};

const register = async (data: dataType) => {
  const url = urls.AUTH.register;
  try {
    const response = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const login = async (data: dataType) => {
  const url = urls.AUTH.login;
  try {
    const response = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (e: any) {
    console.log(e);
    return e;
  }
};

const reset = async (data: any) => {
  const url = urls.AUTH.reset;
  try {
    const response = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (e: any) {
    console.log(e);
    return e;
  }
};

const socials = async (data: any) => {
  const url = urls.AUTH.socials;
  try {
    const response = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (e: any) {
    console.log(e);
    return e;
  }
};

const getAllBusiness = async () => {
  const response = await httpGet(urls.BUSINESS.business, true);
  return response;
};

const getAllConsultantBusiness = async (id: string) => {
  const response = await httpGet(urls.CONSULTANT.get_business.concat(`/${id}`), true);
  return response;
};

const getAllPartners = async () => {
  const response = await httpGet(urls.PARTNERS.all_partners, true);
  return response;
};

const getOneBusiness = async (id: string) => {
  const response = await httpGet(urls.BUSINESS.business.concat(`/${id}`), true);
  return response;
};


const createNewBusinessUser = async(body: newBusinessProps) => {
  try {
    const response = httpPost(
      urls.BUSINESS.create_business,
      true,
      { ...body }
    ) 
    return response;
  } catch (e){
    return e
  }
}

const deleteOneBusiness = async (id: string) => {
  const response = await httpDelete(
    urls.BUSINESS.business.concat(`/${id}`),
    true
  );
  return response;
};

const suspendBusiness = async (id: string) => {
  const response = await httpPatch(
    urls.BUSINESS.business.concat(`/${id}`),
    true,
    { id: id }
  );
  return response;
};

const createNewBusiness = async (id: string, body: businessProps) => {
  try {
    const response = await httpPost(
      urls.BUSINESS.business.concat(`/${id}`),
      true,
      { ...body }
    );
    return response;
  } catch (e) {
    return e;
  }
};


const createNewConsultant = async(id: string, body: consultantProps) => {
  try {
    const response = httpPost(
      urls.CONSULTANT.create_consultant.concat(`/${id}`),
      true,
      { ...body }
    ) 
    return response;
  } catch (e){
    return e
  }
}

const getAllConsultants = async () => {
  const response = await httpGet(urls.CONSULTANT.consultants, true);
  return response;
};

const getPartnerConsultants = async (id: string) => {
  const response = await httpGet(urls.PARTNERS.get_consultant.concat(`/${id}`), true);
  return response;
};

const getPartnerBusiness = async (id: string) => {
  const response = await httpGet(urls.PARTNERS.get_business.concat(`/${id}`), true);
  return response;
};


const getOneConsultant = async (id: string) => {
  try {
    const response = await httpGet(
      urls.CONSULTANT.consultants.concat(`/${id}`),
      true
    );
    return response;
  } catch (e) {
    return e;
  }
};


const getOneAdmin = async (id: string) => {
  try {
    const response = await httpGet(
      urls.ADMIN.get_one_user.concat(`/${id}`),
      true
    );
    return response;
  } catch (e) {
    return e;
  }
};

const getAllUser = async () => {
  try {
    const response = await httpGet(
      urls.ADMIN.all_user,
      true
    );
    return response;
  } catch (e) {
    return e;
  }
};


type bodyProps = {
    id?: string
}

const addConsultant = async (id: string | undefined, body: bodyProps) => {
  try {
    const response = await httpPost(urls.CONSULTANT.add_consultant.concat(`/${id}`), true, {
      ...body,
    });
    return response;
  } catch (e) {
    return e;
  }
};

const suspendConsultant = async (id: string) => {
  const response = await httpPatch(
    urls.CONSULTANT.consultants.concat(`/${id}`),
    true,
    { id: id }
  );
  return response;
};

const subscription = async (id: string, body: subProps) => {
  try {
    const response = await httpPost(
      urls.SUBSCRIPTION.subscription.concat(`/${id}`),
      true,
      { ...body }
    );
    return response;
  } catch (e) {
    return e;
  }
};

const deleteConsultant = async (id: string) => {
  const response = await httpDelete(
    urls.CONSULTANT.consultants.concat(`/${id}`),
    true
  );
  return response;
};

const getAllAnalytics = async () => {
  const response = await httpGet(urls.ANALYTICS.analytics, true);
  return response;
};

const getAllPartnerAnalytics = async (id: string) => {
  const response = await httpGet(urls.ANALYTICS.partner_analytics.concat(`/${id}`), true);
  return response;
};

const getAllConsultantAnalytics = async (id: string) => {
  const response = await httpGet(urls.ANALYTICS.consultant_analytics.concat(`/${id}`), true);
  return response;
};


export {
  register,
  login,
  reset,
  socials,
  getAllBusiness,
  getOneBusiness,
  deleteOneBusiness,
  suspendBusiness,
  getAllConsultants,
  getOneConsultant,
  suspendConsultant,
  deleteConsultant,
  getAllAnalytics,
  createNewBusiness,
  subscription,
  addConsultant,
  createNewConsultant,
  createNewBusinessUser,
  getAllPartners,
  getOneAdmin,
  getAllPartnerAnalytics,
  getPartnerBusiness,
  getPartnerConsultants,
  getAllUser,
  getAllConsultantBusiness,
  getAllConsultantAnalytics
};
