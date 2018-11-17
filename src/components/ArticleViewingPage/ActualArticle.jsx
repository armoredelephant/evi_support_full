import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import ImageViewer from './ImageLoad/ImageViewer';

const ActualArticle = ( props ) => {
    let component = (
        <Fragment>
            <ImageViewer
                articleList={props.articleList}
                allArticleData={props.allArticleData}
                articleId={props.articleId}
                articleIdMatch={props.articleIdMatch}
                backdropClick={props.backdropClick}
            />
        </Fragment>
    )
    return (
        <main role="main">
        <h2>{props.articleId.title}</h2>
        <h3>{props.articleId.description}</h3>
        <ul>
            {props.articleId.body.map(currentStep => (
            currentStep.hasImage 
            ? 
                <li key={currentStep.stepId}>
                    <button key={currentStep.stepId} onClick={props.click}>
                        {currentStep.step}
                    </button>
                </li> 
            :
                <li key={currentStep.stepId}>
                    {currentStep.step}
                </li>
            ))}
        </ul>
        {props.displayImage ? component : ''}
        </main>
    )
}

export default ActualArticle