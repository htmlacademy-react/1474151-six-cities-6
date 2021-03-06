import React from 'react';
import {useParams} from 'react-router-dom';
import {placesPropTypes, reviewsPropTypes} from '../../common/prop-types.js';
import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import {MAX_NUMBER_PIN} from '../../common/const';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import {getNumberOfStars, getPluralaze} from '../../common/utils.js';


const Room = (props) => {
  const {offers, reviews} = props;
  const {id} = useParams();
  const place = offers.find((offer) => offer.id == id);
  const getNearPlaces = offers.filter((offer) => (offer.id != id));

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type
  } = place;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, ind) =>
                <div key={`${image}-${ind}`} className="property__image-wrapper">
                  <img className="property__image" src={`${image}`} alt="Photo studio"/>
                </div>
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (<div className="property__mark">
                <span>Premium</span>
              </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite && `property__bookmark-button--active`} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getNumberOfStars(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedroom{getPluralaze(bedrooms)}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adult{getPluralaze(maxAdults)}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, ind) => (
                    <li key={`${good}-${ind}`} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`${host.avatarUrl}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                {
                  (reviews.length > 0) &&
                  <ReviewsList reviews={reviews} />
                }
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map"><Map offers={getNearPlaces.slice(0, MAX_NUMBER_PIN)} /></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceList offers={getNearPlaces.slice(0, MAX_NUMBER_PIN)} placeName="NEAR"/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  offers: placesPropTypes,
  reviews: reviewsPropTypes
};

export default Room;
