// "score-installments-year"
const INTEREST_RATES = {
  "1-12-2012": { MIN: 0.317, MAX: 0.347 },
  "1-12-2013": { MIN: 0.317, MAX: 0.347 },
  "1-12-2014": { MIN: 0.317, MAX: 0.347 },
  "1-12-2015": { MIN: 0.317, MAX: 0.347 },
  "1-12-2016": { MIN: 0.317, MAX: 0.347 },
  "1-12-2017": { MIN: 0.317, MAX: 0.347 },
  "1-12-2018": { MIN: 0.317, MAX: 0.347 },
  "1-12-2019": { MIN: 0.317, MAX: 0.347 },
  "1-12-2020": { MIN: 0.317, MAX: 0.347 },
  "1-12-2021": { MIN: 0.317, MAX: 0.347 },
  "1-12-2022": { MIN: 0.317, MAX: 0.347 },
  "1-18-2012": { MIN: 0.257, MAX: 0.287 },
  "1-18-2013": { MIN: 0.257, MAX: 0.287 },
  "1-18-2014": { MIN: 0.257, MAX: 0.287 },
  "1-18-2015": { MIN: 0.257, MAX: 0.287 },
  "1-18-2016": { MIN: 0.257, MAX: 0.287 },
  "1-18-2017": { MIN: 0.257, MAX: 0.287 },
  "1-18-2018": { MIN: 0.257, MAX: 0.287 },
  "1-18-2019": { MIN: 0.257, MAX: 0.287 },
  "1-18-2020": { MIN: 0.257, MAX: 0.287 },
  "1-18-2021": { MIN: 0.257, MAX: 0.287 },
  "1-18-2022": { MIN: 0.257, MAX: 0.287 },
  "1-24-2012": { MIN: 0.217, MAX: 0.247 },
  "1-24-2013": { MIN: 0.217, MAX: 0.247 },
  "1-24-2014": { MIN: 0.217, MAX: 0.247 },
  "1-24-2015": { MIN: 0.217, MAX: 0.247 },
  "1-24-2016": { MIN: 0.217, MAX: 0.247 },
  "1-24-2017": { MIN: 0.217, MAX: 0.247 },
  "1-24-2018": { MIN: 0.217, MAX: 0.247 },
  "1-24-2019": { MIN: 0.217, MAX: 0.247 },
  "1-24-2020": { MIN: 0.217, MAX: 0.247 },
  "1-24-2021": { MIN: 0.217, MAX: 0.247 },
  "1-24-2022": { MIN: 0.217, MAX: 0.247 },
  "1-30-2012": { MIN: 0.197, MAX: 0.227 },
  "1-30-2013": { MIN: 0.197, MAX: 0.227 },
  "1-30-2014": { MIN: 0.197, MAX: 0.227 },
  "1-30-2015": { MIN: 0.197, MAX: 0.227 },
  "1-30-2016": { MIN: 0.197, MAX: 0.227 },
  "1-30-2017": { MIN: 0.197, MAX: 0.227 },
  "1-30-2018": { MIN: 0.197, MAX: 0.227 },
  "1-30-2019": { MIN: 0.197, MAX: 0.227 },
  "1-30-2020": { MIN: 0.197, MAX: 0.227 },
  "1-30-2021": { MIN: 0.197, MAX: 0.227 },
  "1-30-2022": { MIN: 0.197, MAX: 0.227 },
  "1-36-2012": { MIN: 0.187, MAX: 0.217 },
  "1-36-2013": { MIN: 0.187, MAX: 0.217 },
  "1-36-2014": { MIN: 0.187, MAX: 0.217 },
  "1-36-2015": { MIN: 0.187, MAX: 0.217 },
  "1-36-2016": { MIN: 0.187, MAX: 0.217 },
  "1-36-2017": { MIN: 0.187, MAX: 0.217 },
  "1-36-2018": { MIN: 0.187, MAX: 0.217 },
  "1-36-2019": { MIN: 0.187, MAX: 0.217 },
  "1-36-2020": { MIN: 0.187, MAX: 0.217 },
  "1-36-2021": { MIN: 0.187, MAX: 0.217 },
  "1-36-2022": { MIN: 0.187, MAX: 0.217 },
  "1-42-2012": { MIN: 0.177, MAX: 0.207 },
  "1-42-2013": { MIN: 0.177, MAX: 0.207 },
  "1-42-2014": { MIN: 0.177, MAX: 0.207 },
  "1-42-2015": { MIN: 0.177, MAX: 0.207 },
  "1-42-2016": { MIN: 0.177, MAX: 0.207 },
  "1-42-2017": { MIN: 0.177, MAX: 0.207 },
  "1-42-2018": { MIN: 0.177, MAX: 0.207 },
  "1-42-2019": { MIN: 0.177, MAX: 0.207 },
  "1-42-2020": { MIN: 0.177, MAX: 0.207 },
  "1-42-2021": { MIN: 0.177, MAX: 0.207 },
  "1-42-2022": { MIN: 0.177, MAX: 0.207 },
  "1-48-2012": { MIN: 0.167, MAX: 0.197 },
  "1-48-2013": { MIN: 0.167, MAX: 0.197 },
  "1-48-2014": { MIN: 0.167, MAX: 0.197 },
  "1-48-2015": { MIN: 0.167, MAX: 0.197 },
  "1-48-2016": { MIN: 0.167, MAX: 0.197 },
  "1-48-2017": { MIN: 0.167, MAX: 0.197 },
  "1-48-2018": { MIN: 0.167, MAX: 0.197 },
  "1-48-2019": { MIN: 0.167, MAX: 0.197 },
  "1-48-2020": { MIN: 0.167, MAX: 0.197 },
  "1-48-2021": { MIN: 0.167, MAX: 0.197 },
  "1-48-2022": { MIN: 0.167, MAX: 0.197 },
  "1-54-2012": { MIN: 0.167, MAX: 0.197 },
  "1-54-2013": { MIN: 0.167, MAX: 0.197 },
  "1-54-2014": { MIN: 0.167, MAX: 0.197 },
  "1-54-2015": { MIN: 0.167, MAX: 0.197 },
  "1-54-2016": { MIN: 0.167, MAX: 0.197 },
  "1-54-2017": { MIN: 0.167, MAX: 0.197 },
  "1-54-2018": { MIN: 0.167, MAX: 0.197 },
  "1-54-2019": { MIN: 0.167, MAX: 0.197 },
  "1-54-2020": { MIN: 0.167, MAX: 0.197 },
  "1-54-2021": { MIN: 0.167, MAX: 0.197 },
  "1-54-2022": { MIN: 0.167, MAX: 0.197 },
  "1-60-2012": { MIN: 0.167, MAX: 0.197 },
  "1-60-2013": { MIN: 0.167, MAX: 0.197 },
  "1-60-2014": { MIN: 0.167, MAX: 0.197 },
  "1-60-2015": { MIN: 0.167, MAX: 0.197 },
  "1-60-2016": { MIN: 0.167, MAX: 0.197 },
  "1-60-2017": { MIN: 0.167, MAX: 0.197 },
  "1-60-2018": { MIN: 0.167, MAX: 0.197 },
  "1-60-2019": { MIN: 0.167, MAX: 0.197 },
  "1-60-2020": { MIN: 0.167, MAX: 0.197 },
  "1-60-2021": { MIN: 0.167, MAX: 0.197 },
  "1-60-2022": { MIN: 0.167, MAX: 0.197 },
  "2-12-2012": { MIN: 0.327, MAX: 0.367 },
  "2-12-2013": { MIN: 0.327, MAX: 0.357 },
  "2-12-2014": { MIN: 0.327, MAX: 0.357 },
  "2-12-2015": { MIN: 0.327, MAX: 0.357 },
  "2-12-2016": { MIN: 0.327, MAX: 0.357 },
  "2-12-2017": { MIN: 0.327, MAX: 0.357 },
  "2-12-2018": { MIN: 0.327, MAX: 0.357 },
  "2-12-2019": { MIN: 0.327, MAX: 0.357 },
  "2-12-2020": { MIN: 0.327, MAX: 0.357 },
  "2-12-2021": { MIN: 0.317, MAX: 0.347 },
  "2-12-2022": { MIN: 0.317, MAX: 0.347 },
  "2-18-2012": { MIN: 0.267, MAX: 0.297 },
  "2-18-2013": { MIN: 0.267, MAX: 0.297 },
  "2-18-2014": { MIN: 0.267, MAX: 0.297 },
  "2-18-2015": { MIN: 0.267, MAX: 0.297 },
  "2-18-2016": { MIN: 0.267, MAX: 0.297 },
  "2-18-2017": { MIN: 0.267, MAX: 0.297 },
  "2-18-2018": { MIN: 0.267, MAX: 0.297 },
  "2-18-2019": { MIN: 0.267, MAX: 0.297 },
  "2-18-2020": { MIN: 0.257, MAX: 0.287 },
  "2-18-2021": { MIN: 0.257, MAX: 0.287 },
  "2-18-2022": { MIN: 0.257, MAX: 0.287 },
  "2-24-2012": { MIN: 0.227, MAX: 0.257 },
  "2-24-2013": { MIN: 0.227, MAX: 0.257 },
  "2-24-2014": { MIN: 0.227, MAX: 0.257 },
  "2-24-2015": { MIN: 0.227, MAX: 0.257 },
  "2-24-2016": { MIN: 0.227, MAX: 0.257 },
  "2-24-2017": { MIN: 0.227, MAX: 0.257 },
  "2-24-2018": { MIN: 0.227, MAX: 0.257 },
  "2-24-2019": { MIN: 0.227, MAX: 0.257 },
  "2-24-2020": { MIN: 0.227, MAX: 0.257 },
  "2-24-2021": { MIN: 0.227, MAX: 0.257 },
  "2-24-2022": { MIN: 0.217, MAX: 0.247 },
  "2-30-2012": { MIN: 0.207, MAX: 0.237 },
  "2-30-2013": { MIN: 0.207, MAX: 0.237 },
  "2-30-2014": { MIN: 0.207, MAX: 0.237 },
  "2-30-2015": { MIN: 0.207, MAX: 0.237 },
  "2-30-2016": { MIN: 0.207, MAX: 0.237 },
  "2-30-2017": { MIN: 0.207, MAX: 0.237 },
  "2-30-2018": { MIN: 0.207, MAX: 0.237 },
  "2-30-2019": { MIN: 0.207, MAX: 0.237 },
  "2-30-2020": { MIN: 0.207, MAX: 0.237 },
  "2-30-2021": { MIN: 0.207, MAX: 0.237 },
  "2-30-2022": { MIN: 0.207, MAX: 0.237 },
  "2-36-2012": { MIN: 0.197, MAX: 0.227 },
  "2-36-2013": { MIN: 0.197, MAX: 0.227 },
  "2-36-2014": { MIN: 0.197, MAX: 0.227 },
  "2-36-2015": { MIN: 0.197, MAX: 0.227 },
  "2-36-2016": { MIN: 0.197, MAX: 0.227 },
  "2-36-2017": { MIN: 0.197, MAX: 0.227 },
  "2-36-2018": { MIN: 0.197, MAX: 0.227 },
  "2-36-2019": { MIN: 0.197, MAX: 0.227 },
  "2-36-2020": { MIN: 0.197, MAX: 0.227 },
  "2-36-2021": { MIN: 0.197, MAX: 0.227 },
  "2-36-2022": { MIN: 0.187, MAX: 0.217 },
  "2-42-2012": { MIN: 0.187, MAX: 0.217 },
  "2-42-2013": { MIN: 0.187, MAX: 0.217 },
  "2-42-2014": { MIN: 0.187, MAX: 0.217 },
  "2-42-2015": { MIN: 0.187, MAX: 0.217 },
  "2-42-2016": { MIN: 0.187, MAX: 0.217 },
  "2-42-2017": { MIN: 0.187, MAX: 0.217 },
  "2-42-2018": { MIN: 0.187, MAX: 0.217 },
  "2-42-2019": { MIN: 0.187, MAX: 0.217 },
  "2-42-2020": { MIN: 0.187, MAX: 0.217 },
  "2-42-2021": { MIN: 0.187, MAX: 0.217 },
  "2-42-2022": { MIN: 0.187, MAX: 0.217 },
  "2-48-2012": { MIN: 0.177, MAX: 0.207 },
  "2-48-2013": { MIN: 0.177, MAX: 0.207 },
  "2-48-2014": { MIN: 0.177, MAX: 0.207 },
  "2-48-2015": { MIN: 0.177, MAX: 0.207 },
  "2-48-2016": { MIN: 0.177, MAX: 0.207 },
  "2-48-2017": { MIN: 0.177, MAX: 0.207 },
  "2-48-2018": { MIN: 0.177, MAX: 0.207 },
  "2-48-2019": { MIN: 0.177, MAX: 0.207 },
  "2-48-2020": { MIN: 0.177, MAX: 0.207 },
  "2-48-2021": { MIN: 0.177, MAX: 0.207 },
  "2-48-2022": { MIN: 0.177, MAX: 0.207 },
  "2-54-2012": { MIN: 0.177, MAX: 0.207 },
  "2-54-2013": { MIN: 0.177, MAX: 0.207 },
  "2-54-2014": { MIN: 0.177, MAX: 0.207 },
  "2-54-2015": { MIN: 0.177, MAX: 0.207 },
  "2-54-2016": { MIN: 0.177, MAX: 0.207 },
  "2-54-2017": { MIN: 0.177, MAX: 0.207 },
  "2-54-2018": { MIN: 0.177, MAX: 0.207 },
  "2-54-2019": { MIN: 0.177, MAX: 0.207 },
  "2-54-2020": { MIN: 0.177, MAX: 0.207 },
  "2-54-2021": { MIN: 0.177, MAX: 0.207 },
  "2-54-2022": { MIN: 0.177, MAX: 0.207 },
  "2-60-2012": { MIN: 0.167, MAX: 0.197 },
  "2-60-2013": { MIN: 0.167, MAX: 0.197 },
  "2-60-2014": { MIN: 0.167, MAX: 0.197 },
  "2-60-2015": { MIN: 0.167, MAX: 0.197 },
  "2-60-2016": { MIN: 0.167, MAX: 0.197 },
  "2-60-2017": { MIN: 0.167, MAX: 0.197 },
  "2-60-2018": { MIN: 0.167, MAX: 0.197 },
  "2-60-2019": { MIN: 0.167, MAX: 0.197 },
  "2-60-2020": { MIN: 0.167, MAX: 0.197 },
  "2-60-2021": { MIN: 0.167, MAX: 0.197 },
  "2-60-2022": { MIN: 0.167, MAX: 0.197 },
  "3-12-2012": { MIN: 0.327, MAX: 0.397 },
  "3-12-2013": { MIN: 0.327, MAX: 0.397 },
  "3-12-2014": { MIN: 0.327, MAX: 0.397 },
  "3-12-2015": { MIN: 0.327, MAX: 0.397 },
  "3-12-2016": { MIN: 0.327, MAX: 0.387 },
  "3-12-2017": { MIN: 0.327, MAX: 0.387 },
  "3-12-2018": { MIN: 0.327, MAX: 0.377 },
  "3-12-2019": { MIN: 0.327, MAX: 0.377 },
  "3-12-2020": { MIN: 0.327, MAX: 0.367 },
  "3-12-2021": { MIN: 0.327, MAX: 0.357 },
  "3-12-2022": { MIN: 0.327, MAX: 0.357 },
  "3-18-2012": { MIN: 0.267, MAX: 0.327 },
  "3-18-2013": { MIN: 0.267, MAX: 0.327 },
  "3-18-2014": { MIN: 0.267, MAX: 0.327 },
  "3-18-2015": { MIN: 0.267, MAX: 0.327 },
  "3-18-2016": { MIN: 0.267, MAX: 0.327 },
  "3-18-2017": { MIN: 0.267, MAX: 0.317 },
  "3-18-2018": { MIN: 0.267, MAX: 0.317 },
  "3-18-2019": { MIN: 0.267, MAX: 0.307 },
  "3-18-2020": { MIN: 0.267, MAX: 0.307 },
  "3-18-2021": { MIN: 0.267, MAX: 0.297 },
  "3-18-2022": { MIN: 0.267, MAX: 0.297 },
  "3-24-2012": { MIN: 0.247, MAX: 0.297 },
  "3-24-2013": { MIN: 0.247, MAX: 0.297 },
  "3-24-2014": { MIN: 0.247, MAX: 0.297 },
  "3-24-2015": { MIN: 0.247, MAX: 0.287 },
  "3-24-2016": { MIN: 0.247, MAX: 0.287 },
  "3-24-2017": { MIN: 0.247, MAX: 0.287 },
  "3-24-2018": { MIN: 0.227, MAX: 0.277 },
  "3-24-2019": { MIN: 0.227, MAX: 0.277 },
  "3-24-2020": { MIN: 0.227, MAX: 0.267 },
  "3-24-2021": { MIN: 0.227, MAX: 0.267 },
  "3-24-2022": { MIN: 0.227, MAX: 0.257 },
  "3-30-2012": { MIN: 0.227, MAX: 0.277 },
  "3-30-2013": { MIN: 0.227, MAX: 0.277 },
  "3-30-2014": { MIN: 0.227, MAX: 0.277 },
  "3-30-2015": { MIN: 0.227, MAX: 0.267 },
  "3-30-2016": { MIN: 0.227, MAX: 0.267 },
  "3-30-2017": { MIN: 0.227, MAX: 0.267 },
  "3-30-2018": { MIN: 0.227, MAX: 0.267 },
  "3-30-2019": { MIN: 0.207, MAX: 0.257 },
  "3-30-2020": { MIN: 0.207, MAX: 0.257 },
  "3-30-2021": { MIN: 0.207, MAX: 0.247 },
  "3-30-2022": { MIN: 0.207, MAX: 0.237 },
  "3-36-2012": { MIN: 0.217, MAX: 0.257 },
  "3-36-2013": { MIN: 0.217, MAX: 0.257 },
  "3-36-2014": { MIN: 0.217, MAX: 0.257 },
  "3-36-2015": { MIN: 0.217, MAX: 0.257 },
  "3-36-2016": { MIN: 0.217, MAX: 0.257 },
  "3-36-2017": { MIN: 0.217, MAX: 0.257 },
  "3-36-2018": { MIN: 0.197, MAX: 0.247 },
  "3-36-2019": { MIN: 0.197, MAX: 0.247 },
  "3-36-2020": { MIN: 0.197, MAX: 0.247 },
  "3-36-2021": { MIN: 0.197, MAX: 0.237 },
  "3-36-2022": { MIN: 0.197, MAX: 0.227 },
  "3-42-2012": { MIN: 0.207, MAX: 0.247 },
  "3-42-2013": { MIN: 0.207, MAX: 0.247 },
  "3-42-2014": { MIN: 0.207, MAX: 0.247 },
  "3-42-2015": { MIN: 0.207, MAX: 0.247 },
  "3-42-2016": { MIN: 0.207, MAX: 0.247 },
  "3-42-2017": { MIN: 0.207, MAX: 0.247 },
  "3-42-2018": { MIN: 0.207, MAX: 0.247 },
  "3-42-2019": { MIN: 0.187, MAX: 0.237 },
  "3-42-2020": { MIN: 0.187, MAX: 0.237 },
  "3-42-2021": { MIN: 0.187, MAX: 0.227 },
  "3-42-2022": { MIN: 0.187, MAX: 0.227 },
  "3-48-2012": { MIN: 0.197, MAX: 0.247 },
  "3-48-2013": { MIN: 0.177, MAX: 0.227 },
  "3-48-2014": { MIN: 0.197, MAX: 0.247 },
  "3-48-2015": { MIN: 0.197, MAX: 0.247 },
  "3-48-2016": { MIN: 0.197, MAX: 0.237 },
  "3-48-2017": { MIN: 0.197, MAX: 0.237 },
  "3-48-2018": { MIN: 0.197, MAX: 0.237 },
  "3-48-2019": { MIN: 0.197, MAX: 0.237 },
  "3-48-2020": { MIN: 0.177, MAX: 0.227 },
  "3-48-2021": { MIN: 0.177, MAX: 0.227 },
  "3-48-2022": { MIN: 0.177, MAX: 0.217 },
  "3-54-2012": { MIN: 0.197, MAX: 0.237 },
  "3-54-2013": { MIN: 0.177, MAX: 0.227 },
  "3-54-2014": { MIN: 0.197, MAX: 0.237 },
  "3-54-2015": { MIN: 0.197, MAX: 0.237 },
  "3-54-2016": { MIN: 0.197, MAX: 0.237 },
  "3-54-2017": { MIN: 0.197, MAX: 0.237 },
  "3-54-2018": { MIN: 0.197, MAX: 0.237 },
  "3-54-2019": { MIN: 0.177, MAX: 0.227 },
  "3-54-2020": { MIN: 0.177, MAX: 0.227 },
  "3-54-2021": { MIN: 0.177, MAX: 0.217 },
  "3-54-2022": { MIN: 0.177, MAX: 0.217 },
  "3-60-2012": { MIN: 0.197, MAX: 0.237 },
  "3-60-2013": { MIN: 0.167, MAX: 0.217 },
  "3-60-2014": { MIN: 0.187, MAX: 0.237 },
  "3-60-2015": { MIN: 0.187, MAX: 0.237 },
  "3-60-2016": { MIN: 0.187, MAX: 0.237 },
  "3-60-2017": { MIN: 0.187, MAX: 0.227 },
  "3-60-2018": { MIN: 0.187, MAX: 0.227 },
  "3-60-2019": { MIN: 0.187, MAX: 0.227 },
  "3-60-2020": { MIN: 0.187, MAX: 0.227 },
  "3-60-2021": { MIN: 0.167, MAX: 0.217 },
  "3-60-2022": { MIN: 0.167, MAX: 0.217 },
  "4-12-2012": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2013": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2014": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2015": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2016": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2017": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2018": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2019": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2020": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2021": { MIN: 0.3033, MAX: 0.3033 },
  "4-12-2022": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2012": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2013": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2014": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2015": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2016": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2017": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2018": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2019": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2020": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2021": { MIN: 0.3033, MAX: 0.3033 },
  "4-18-2022": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2012": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2013": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2014": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2015": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2016": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2017": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2018": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2019": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2020": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2021": { MIN: 0.3033, MAX: 0.3033 },
  "4-24-2022": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2012": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2013": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2014": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2015": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2016": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2017": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2018": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2019": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2020": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2021": { MIN: 0.3033, MAX: 0.3033 },
  "4-30-2022": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2012": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2013": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2014": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2015": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2016": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2017": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2018": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2019": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2020": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2021": { MIN: 0.3033, MAX: 0.3033 },
  "4-36-2022": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2012": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2013": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2014": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2015": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2016": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2017": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2018": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2019": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2020": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2021": { MIN: 0.3033, MAX: 0.3033 },
  "4-42-2022": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2012": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2013": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2014": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2015": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2016": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2017": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2018": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2019": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2020": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2021": { MIN: 0.3033, MAX: 0.3033 },
  "4-48-2022": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2012": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2013": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2014": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2015": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2016": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2017": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2018": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2019": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2020": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2021": { MIN: 0.3033, MAX: 0.3033 },
  "4-56-2022": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2012": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2013": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2014": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2015": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2016": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2017": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2018": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2019": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2020": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2021": { MIN: 0.3033, MAX: 0.3033 },
  "4-60-2022": { MIN: 0.3033, MAX: 0.3033 },
}

const SETTINGS = {
  FORMALIZATION_FEE: 0.029,
  LIMIT: "MIN",
  SCORE: 1,
  YEAR: 2015,
}

const simulatorInputs = {
  get downPayment() {
    return this.price * this.downPaymentRate
  },
  downPaymentRate: 0.2,
  price: 100000,
}

/**
 * @param {Object} options An object containing the parameters
 * @param {number} options.installments The selected amount of installments
 * @param {("MIN" | "MAX")} options.limit Whether to use the minimum or maximum
 * rate
 * @param {(1 | 2 | 3 | 4)} options.score The client's score
 * @param {number} options.year The year of the car
 * @returns {number} The interest rate for the given parameters
 */
const getInterestRate = ({ installments, limit, score, year }) => {
  const key = `${score}-${installments}-${year}`
  return INTEREST_RATES[key][limit]
}

/**
 * @param {Object} options An object containing the parameters
 * @param {number} options.downPayment The down payment as an absolute amount
 * @param {number} options.installments The selected amount of installments
 * @param {("MIN" | "MAX")} options.limit Whether to use the minimum or maximum
 * rate
 * @param {number} options.price The price of the car
 * @param {(1 | 2 | 3 | 4)} options.score The client's score
 * @param {number} options.year The year of the car
 * @returns {number} The installment amount for the given parameters
 */
const getInstallmentAmount = ({
  downPayment,
  installments,
  limit,
  price,
  score,
  year,
}) => {
  const annualRate = getInterestRate({ installments, limit, score, year })

  const monthlyRate = (1 + annualRate) ** (1 / 12) - 1

  const installmentAmount =
    ((price - downPayment) * (1 + monthlyRate * installments)) / installments

  return installmentAmount
}

/**
 * Rounds and formats a given number according to Mexico's format
 *
 * @param {number} number The number to format
 * @returns {string} The formatted number
 */
const formatNumber = (number) =>
  new Intl.NumberFormat("es-MX").format(Math.round(number))

/**
 * Updates the displayed installment amounts for every option
 */
const updateInstallmentAmounts = () => {
  const { downPayment, price } = simulatorInputs

  const installmentOptionElements = document.querySelectorAll(
    ".simulator-installment-option",
  )

  installmentOptionElements.forEach((element) => {
    const installments = element.dataset.installments

    const installmentAmount = getInstallmentAmount({
      downPayment,
      installments,
      limit: SETTINGS.LIMIT,
      price,
      score: SETTINGS.SCORE,
      year: SETTINGS.YEAR,
    })

    element.querySelector(
      ".simulator-installment-price",
    ).textContent = `$ ${formatNumber(installmentAmount)}`
  })
}

/**
 * @typedef {Object} FormatInputReturnValue
 * @property {string} display The value as a formatted string
 * @property {number} numeric The value as a number
 */
/**
 *
 * @param {string} value The input's value
 * @returns {FormatInputReturnValue} The value as formatted string and as number
 */
const formatInput = (value) => {
  let display, numeric

  if (!value || !parseInt(value.replace(/\D/g, ""))) {
    display = ""
    numeric = 0
  } else {
    display = formatNumber(parseInt(value.replace(/\D/g, "")))
    numeric = parseInt(value.replace(/\D/g, ""))
  }

  return {
    display,
    numeric,
  }
}

/**
 * Updates the absolute value of the down payment
 */
const updateDownPayment = () => {
  document.querySelector(
    ".simulator-down-payment",
  ).textContent = `Enganche: $ ${formatNumber(simulatorInputs.downPayment)}`
}

const updateFormalizationFee = () => {
  const { downPayment, price } = simulatorInputs

  const newValue = (price - downPayment) * SETTINGS.FORMALIZATION_FEE

  document.querySelector(
    ".simulator-formalization-fee",
  ).textContent = `Comisión P/A: $ ${formatNumber(newValue)}`
}
/**
 * Updates installment amounts, down payment and formalization fee
 */
const updateResults = () => {
  updateInstallmentAmounts()
  updateDownPayment()
  updateFormalizationFee()
}

/**
 * Formats the price input and updates installment amounts and down payment
 */
const handlePriceKeyup = (e) => {
  const { display, numeric } = formatInput(e.currentTarget.value)

  e.currentTarget.value = display
  simulatorInputs.price = numeric

  updateResults()
}

/**
 * Formats the down payment rate input, marks it as invalid if necessary or
 * otherwise updates installment amounts and down payment
 */
const handleDownPaymentRateKeyup = (e) => {
  let { display, numeric } = formatInput(e.currentTarget.value)
  if (numeric > 100) {
    numeric = 100
    e.currentTarget.value = "100"
  } else {
    e.currentTarget.value = display
  }

  const isValid = numeric >= 20

  console.log(isValid)

  if (isValid) {
    e.currentTarget.classList.remove("invalid")

    simulatorInputs.downPaymentRate = numeric / 100

    updateResults()
  } else e.currentTarget.classList.add("invalid")
}

/**
 * Marks the clicked installment option as the only active one
 */
const handleInstallmentOptionClick = (e) => {
  document
    .querySelectorAll(".simulator-installment-option")
    .forEach((element) => element.classList.remove("active"))

  console.log(e.currentTarget)
  e.currentTarget.classList.add("active")
}

document.addEventListener("DOMContentLoaded", () => {
  // handle changes in price
  document
    .querySelector("#simulator-price")
    .addEventListener("keyup", handlePriceKeyup)

  // handle changes in down payment rate
  document
    .querySelector("#simulator-down-payment-rate")
    .addEventListener("keyup", handleDownPaymentRateKeyup)

  document
    .querySelectorAll(".simulator-installment-option")
    .forEach((element) =>
      element.addEventListener("click", handleInstallmentOptionClick),
    )

  updateResults()
})
