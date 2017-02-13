let chai = require( 'chai' );
let chaiMoment = require( '../index' );
let dirtyChai = require( 'dirty-chai' );
// let path = require( 'path' );
// let _ = require( 'lodash' );

chai.use( chaiMoment );
chai.use( dirtyChai );
let expect = chai.expect;

describe( 'chai-moment', function() {
    // --- Some Examples ---
    // let time = moment( '1975-10-17' );
    // expect( time ).is.before.moment( Date.now() );
    // expect( time ).is.sameOrBefore.moment( Date.now() );
    // expect( time ).is.same.moment( time );
    // expect( time ).is.betweenMoments( time );

    context( 'has a method `moment` that', function() {
        it( 'fails if it is not supplied with a Date or Moment object', function() {
            expect( chai.moment.moment( 'some string' ) ).to.be.false();
        } );
    } );

    context( 'has a chainable method `before` that', function() {
        it( 'throws an error if it is used to check a value' );
    } );
} );
