import React, { createContext, useContext, useState } from "react";
import { apiGet, apiPost, apiDelete, apiPut } from "./axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tr } from "date-fns/locale";
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import jwtDecode from "jwt-decode"
interface DecodedToken {
  id: string;
}


export const dataContext = createContext<undefined | any>(undefined);

const DataProvider = ({ children }: any ) => {
  // const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>('token', false);


  //======Login=====/
  const login = async (loginData: any) => {
    try {
      await apiPost("/user/login", loginData).then((res) => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);
        setTimeout(() => (window.location.href = "/dashboard"), 1000);
        // localStorage.setItem("token", res.data?.token);
        // // setIsAuthenticated(true);
        // window.location.href = "/dashboard";
        toast.success(res.data.message)
      });
    } catch (error) {
      console.log(error);
    }
  };

 const logOut =async ()=>{
  try {
    sessionStorage.clear();
  window.location.href="/"
  } catch (error) {
    console.log(error)
  }
  
 }
  // Register
  const register = async (registerData: any) => {
    try {
      await apiPost("/user/register", registerData).then((res) => {
        console.log(res);
        window.location.href = "/login";
        toast.success(res.data.message)
      });
     
    } catch (error) {
      // toast.error(res.data.message)
      console.log(error);
    }
  };

  const sendEmail = async (emailData: any) => {
    await apiPost("/user/send_email", emailData).then((res) => {
      const response = res.data;
      console.log(response);
    });
  };

  const resetPassword = async (passwordData: any) => {
    await apiPost("/user/reset_password", passwordData).then((res) => {
      const response = res.data;
      console.log(response);
      window.location.href = "/login";
    });
  };

  const [allIncome, setAllIncome] = useState([]);
  const getAllIncome = async () => {
    await apiGet("/cash/income").then((res) => {
      const response = res.data.income;
      setAllIncome(response);
    });
  };
  const [cashIncome, setCashIncome] = useState([]);

  const getCashIncome = async () => {
    await apiGet("/cash").then((res) => {
      const data = res.data;
      setCashIncome(data);
    });
  };
  //====================createCashIncome ===========================//

  const createCashIncome = async (formData: any) => {
    await apiPost("/cash/add", formData).then((res) => {
      const response = res.data;
    });
  };

  const addExpense = async (formData: any) => {
    await apiPost("/expense/create", formData).then((res) => {
      const response = res.data;
      console.log(response);
    });
  };

  const [expenditure, setExpenditure] = useState([]);
  const getExpense = async () => {
    await apiGet("/expense").then((res) => {
      const response = res.data.expenditures;
      setExpenditure(response);
    });
  };

  const [profile, setProfile] = useState({});
  const getProfile = async () => {
    await apiGet("/user").then((response) => {
      const res = response.data;
      setProfile(res);
      if (res) {
        return res;
      } else {
        return "No user found";
      }
    });
  };

  const [personalDetails, setPersonalDetails] = useState([]);
  const getPersonalDetails = async () => {
    await apiGet("/user/getAccount").then((response) => {
      const res = response.data;
      setPersonalDetails(res);
      if (res) {
        return response.data;
      } else {
        return "No user found";
      }
    });
  };
 const[account,setAccount]=useState([])
  const getUserAccount =async()=>{
    await apiGet("/account/account").then((res)=>{
    setAccount(res.data)
    })
  }

  const [waitingExpenses, setWaitingExpenses] = useState([]);
  const getWaitingExpenses = async () => {
    await apiGet("/expense/waiting-expenses").then((response) => {
      const res = response.data;
      setWaitingExpenses(res);
    });
  };
  const [accountDetails, setAccountDetails] = useState([]);
  const getAccounts = async () => {
    await apiGet("/account/account").then((res) => {
      const response = res.data;
      setAccountDetails(response);
    });
  };

  const addCashExpense = async (formData: any) => {
    await apiPost("/expense/add-cash", formData).then((res) => {
  
    });
  };

  const deleteIncome = async (id: string) => {
    await apiDelete(`/cash/delete/${id}`).then((res: any) => {
  
      toast.success(res.data.message)
    });
  };

  const updateCashIncome =async(formData:{id:string, amount:string, narration:string})=>{
        const{id,amount,narration}=formData;
        const payload ={
          narration,
          amount,
        }

    await apiPut(`/cash/update/${id}`,payload).then((res: any) => {
  
      toast.success(res.data.message)
    });

  }


  const deleteExpense = async (id: string) => {
    await apiDelete(`/expense/delete-expense/${id}`).then((res: any) => {
  
      toast.success(res.data.message)
    });
  };

  const [singleExpense, setSingleExpense] = useState({});
  const getsingleExpense = async (id: string) => {
    await apiGet(`/expense/get-expense/${id}`).then((res) => {
      const response = res.data;
      setSingleExpense(response);

    });
  };

  const updateExpense = async (formData: any) => {
    const { id, category, description, amount, narration } = formData;

    const request = {
      category,
      description,
      amount,
      narration,
    };
    await apiPut(`/expense/edit-expense/${id}`, request).then((res) => {
      const response = res.data;
      toast.success(res.data.message)
    });
  };
 
  
  const [savings,setSavings]=useState([])
  const getSavings = async () => {
      await apiGet("/api/savings-targets").then((res) => {
        const response = res.data;
        setSavings(response);
      });
  }
 const addSavings = async (formData: any) => {
   await apiPost("/api/savings-targets", formData).then((res) => {
 
   });
 };
  
  const editSavings = async (formData: any) => {
    const { id, savingPurpose, frequency, targetAmount, targetDate } = formData;
    const payload = {
      savingPurpose,
      frequency,
      targetAmount,
      targetDate,
    };
    await apiPut(`/api/savings-targets/${id}`, payload).then((res) => {
  
    });
  }
  const deleteSavings = async (id: string) => {
    await apiDelete(`/api/savings-targets/${id}`).then((res: any) => {
  
    });
  };

  const addAccount = async (formData: FormData) => {
      await apiPost("/account/addAccount", formData).then((res) => {
        const response = res.data;
        localStorage.setItem("token", res.data?.token);


     
    }); 
  };

  const verifyAccount = async (formData: FormData) => {
    await apiPost("/account/verifyOtp", formData).then((res) => {
      const response = res.data;
    console.log(response);

    window.location.href = "/otp_successfu_modal";
  }); 
};


const fetchAccount = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.log("Token not found.");
        return;
      }
      

      const decodedToken = jwtDecode(token) as DecodedToken;
      console.log("Decoded Token:", decodedToken);
      console.log("userId:", decodedToken.id); //

    const response = await apiGet(`/account/${decodedToken.id}`);
    const accountData = response.data.accountDetails;

    console.log(accountData); 

    return accountData;
  } catch (error) {
    console.error("Error fetching account details:", error);
    throw new Error("Failed to fetch account details. Please try again later.");
  }
};



  
 const [categories,setCategories]=useState([])
  const getCategories = async()=>{
    await apiGet("/expense/categories").then((res)=>{
      setCategories(res.data);
    })
  }


interface FormInterface{
  id:string
  category: string,
   amount: number,
   amountSpent: number,
   frequency: string
}
const addplannedPayment = async (form:FormInterface)=>{
  await apiPost(`/plannedpayments`,form).then((res)=>{
    console.log(res.data)
  })
}

const editPlannedPayment = async (form:FormInterface)=>{

  await apiPut(`/plannedpayments/${form.id}`,form).then((res)=>{
    console.log(res.data)
  }) 
}

const  deletePlannedPayment = async (id:string)=>{
  await apiDelete(`/plannedpayments/${id}`).then((res)=>{
    console.log(res.data)
  })
}
  const[plannedPayments,setPlannedPayments]=useState([])
const getAllPlannedPayment = async ()=>{
  await apiGet(`/plannedpayments`).then((res)=>{
    setPlannedPayments(res.data.categories)
  })
}
interface FormAttribute{
  id: string;
  category: string;
  setLimit: number;
  amountSpent: number;
  description: string
}

const addDailyNeeds = async (form:FormAttribute)=>{
  await apiPost(`/dailyneeds`,form).then((res)=>{
    console.log(res.data)
  })
}

const editDailyNeeds = async (form:FormAttribute)=>{

  await apiPut(`/dailyneeds/${form.id}`,form).then((res)=>{
    console.log(res.data)
  })
};

const  deleteDailyNeeds = async (id:string)=>{
  await apiDelete(`/dailyneeds/${id}`).then((res)=>{
    console.log(res.data)
  })
}
  const[dailyNeeds,setDailyNeeds]=useState([])
 
  const getAllDailyNeeds = async ()=>{
  await apiGet(`/dailyneeds`).then((res)=>{
     setDailyNeeds(res.data.categories)
 
  })
}
  return (
    <dataContext.Provider
      value={{
        login,
        register,
        sendEmail,
        resetPassword,
        createCashIncome,
        updateCashIncome,
        getCashIncome,
        getExpense,
        addExpense,
        getProfile,
        getPersonalDetails,
        getAllIncome,
        getAccounts,
        getWaitingExpenses,
        addCashExpense,
        deleteIncome,
        getsingleExpense,
        updateExpense,
        deleteExpense,
        getSavings,
        addSavings,
        editSavings,
        deleteSavings,
        getCategories,
        getUserAccount,
        logOut,
        addplannedPayment,
        editPlannedPayment,
        deletePlannedPayment,
        getAllPlannedPayment,
        addDailyNeeds,
        editDailyNeeds,
        deleteDailyNeeds,
        getAllDailyNeeds,
        plannedPayments,
        dailyNeeds,
        account,
        singleExpense,
        categories,
        savings,
        waitingExpenses,
        accountDetails,
        allIncome,
        profile,
        personalDetails,
        cashIncome,
        expenditure,
        fetchAccount, 
        verifyAccount, 
        addAccount
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(dataContext);
  if (context === null) {
    throw new Error("useAuth must be used within a DataProvider");
  }
  return context;
};

export default DataProvider;
