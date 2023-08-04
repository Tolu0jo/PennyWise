import express from "express";
import cors from "cors";
import logger from "morgan"
import bodyParser from "body-parser";
import sequelize  from "./Config/db";
import cookieParser from "cookie-parser"
import userRoutes from "./Routes/userRoutes"
import cashRoutes from "./Routes/cashRoutes"
import accountRoutes from "./Routes/accountRoutes";
import expensesRoutes from "./Routes/expensesRoute";
import savingsRouter from './Routes/savings';
import userRoute from "./Routes/user"
import dotenv from 'dotenv';
import dailyNeedsRoutes from "./Routes/dailyNeedsRoutes";
import plannedPaymenstRoutes from "./Routes/plannedPaymentsRoutes";


dotenv.config();


const app = express();

app.use(
  cors({
    origin:true,
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(express.json())
app.use(logger("dev"))
app.use(cookieParser())


app.use("/cash",cashRoutes);
app.use("/user",userRoutes)
app.use("/user",userRoute)
app.use("/account",accountRoutes)
//  app.use("/user",accountRoutes)
app.use("/dailyneeds", dailyNeedsRoutes)
app.use("/plannedpayments", plannedPaymenstRoutes)
app.use("/expense",expensesRoutes)
app.use('/api', savingsRouter);





const syncDatabase = async () => {
   try {
    await sequelize.authenticate();
    console.log('Connected to the database.');

    await sequelize.sync({ force: false }).then(() => {
        console.log('Database synced successfully');
      });
    
   } catch (error) {
    console.error('Unable to connect to the database:', error);
   } 
}
  
  syncDatabase();

const port = 4040

app.listen(port,()=>{
    console.log('listening on port '+port);
});