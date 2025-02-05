import { token } from "@/utils/token";

export const SignUpByEmail = async (toast: any,customer_id: string, full_name: string, email: string, password: string,  ) => {
    let first_name = full_name.split(' ')[0];
    let last_name = full_name.split(' ')[1];
    try {
        const res = await fetch(
          "https://test.esimplified.io/customer/esimpalace/api/customer_register/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
            body: JSON.stringify({
              email,
              password,
              customer_id,
              first_name,
              last_name,
              full_name
            }),
          }
        );
        const response = await res.json();
        if (res.ok === false) throw response.detail;
        return response;
      } catch (error) {
        toast.error(error)
        return false;
      }
} 