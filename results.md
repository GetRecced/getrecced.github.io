# Results

We compared our HFT model against 5 baseline methods. Each of the respective baseline method used has been explained in detail in the [[Methodology]] section. 

## Evaluation Metric
Our metrics for evaluation are Root Mean Squared Error (RMSE) and Mean Absolute Error (MAE), the formula for which are given below:

#### RMSE: 

![RMSE](https://cdn-images-1.medium.com/max/1600/1*9hQVcasuwx5ddq_s3MFCyw.gif)

#### MAE:

![MAE](https://cdn-images-1.medium.com/max/1600/1*OVlFLnMwHDx08PHzqlBDag.gif)

*** 

## Findings

![Results Table Get Recced](https://github.com/GetRecced/IR670_Spring2018/blob/master/Images/Results/Results%20Table.png)

* In line with our original hypothesis, we can see that using the review text in combination with the numerical ratings hailed better results in terms of both RMSE and MAE.
* The HFT model performed the best with an **RMSE of 1.1** on the whole 750K reviews, and an **RMSE of 1.02** on 20K reviews. 
* In the case of both datasets (750K, 20K) we saw a visible improvement in RMSE/MAE scores.
* We did not run the Collaborative Filtering model or Latent Dirichlet Allocation model on the 750K dataset due to lack of processing power and the sheer time taken to run these models.
* Additionally, it is interesting to note that most of our baseline methods (using only ratings) performed either better or roughly the same on the larger dataset, whereas the HFT model performed slightly worse. 

***
