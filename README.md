# mlj-flux-eval

```julia
using DataFrames
using CSV
using MLJ
using Flux
using TextAnalysis
using WordTokenizers

"""
`evaluateModel(df::DataFrame, model_filename::String)`

Evaluates the performance of the trained machine learning model on a separate test dataset.

# Arguments
- `df::DataFrame`: A DataFrame containing the emergency call transcripts and associated metadata, including the extracted features for the test set.
- `model_filename::String`: The filename of the trained model to be evaluated.

# Returns
- `Nothing`: Prints out the evaluation metrics.
"""
function evaluateModel(df::DataFrame, model_filename::String)
    # Load the trained model
    mach = MLJ.load(model_filename)
    
    # Split the data into features and labels
    features = [:emergency_type_encoded, :urgency_encoded, :num_keywords, :normalized_sentiment]
    X_test = select(df, features)
    y_test = df[:category]
    
    # Wrap the data in MLJ's machine learning data containers
    Xtest = MLJ.table(X_test)
    ytest = MLJ.categorical(y_test)
    
    # Predict using the trained model
    yhat = MLJ.predict(mach, Xtest)
    
    # Evaluate the model
    acc = accuracy(yhat, ytest)
    println("Model accuracy on test set: $acc")
    
    # Additional evaluation metrics can be added here
    conf_matrix = confusion_matrix(yhat, ytest)
    println("Confusion Matrix:\n$conf_matrix")
end

# Example usage
# Load the test dataset
df_test = CSV.read("emergency_call_data_test.csv", DataFrame)

# Evaluate the model
evaluateModel(df_test, "emergency_response_model.jl")
```


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/mlj-flux-eval.git
cd mlj-flux-eval
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
