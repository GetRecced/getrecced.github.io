# Technology Used

Being a Graduate Course in Computer Science and Engineering (CSE) at Texas A&M University, the CSCE 670 - Information Storage and Retrieval course would obviously require us to write code as a part of the submission.

We outline below at a high level what programming languages we used, as well as which libraries and what purpose they were used for.

## Programming Languages

#### Python

* Implementation of Baseline Approaches 
* Scripts to split datasets into Train/test based on our customized requirements
* Scripts to scrape Amazon website to reverse lookup product details from an ASIN (Amazon Standard Identification Number) code
* Data Analysis and Exploration of our datasets
* Code to convert .json files to .votes files as required by HFT 

#### C++
* Running of HFT models with custom modifications

## Libraries/Packages:

| Library Name  | Usage         |  
| ------------- |-------------|
| Pandas      | Reading and writing data in 'dataframes' in Python |
| SkLearn, Scipy, Numpy | Matrix operations, calculation of RMSE, MAE, Pearson correlation, etc     | 
| Surprise | Implementation of SVD Approach      | 
| Matplotlib | Plotting data for analysis |
| Requests| Hitting URLs for Asin lookup|
| BeautifulSoup| HTML Parsing |
| pyLDAvis | Visualization of LDA topics |
