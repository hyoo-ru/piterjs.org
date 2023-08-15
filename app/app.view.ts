namespace $.$$ {

	$mol_tree

	export class $piterjs_app extends $.$piterjs_app {

		@ $mol_mem
		now( next? : string | null ) { return this.$.$mol_state_arg.value( 'now' , next ) }

		@ $mol_mem
		intro( next? : string | null ) {
			return this.$.$mol_state_arg.value( 'intro' , next )!
		}

		place_show() { return this.$.$mol_state_arg.value( 'place' ) !== null }

		others() { return this.$.$mol_state_arg.value( 'others' ) !== null }

		@ $mol_mem
		meetup_id( next? : string | null ) { return this.$.$mol_state_arg.value( 'meetup' , next ) }
		meetup( id : string ) { return $piterjs_meetup.item( id ) }
		
		speech_id( next? : string ) { return this.$.$mol_state_arg.value( 'speech' , next ) }
		speech( id : string ) { return $piterjs_speech.item( id ) }
		
		speaker_id( next? : string ) { return this.$.$mol_state_arg.value( 'speaker' , next ) }
		speaker( id : string ) { return $piterjs_speaker.item( id ) }

		@ $mol_mem
		pages() {
			if( this.intro() != null ) return [ this.Intro() ]
			const pages = [
				this.Menu() ,
				... this.meetup_id() ? [ this.Meetup( this.meetup_id() ) ] : [] ,
				... this.speech_id() ? [ this.Speech( this.speech_id() ) ] : [] ,
				... this.place_show() ? [ this.Place() ] : [] ,
				... this.video_uri() ? [ this.Video() ] : [] ,
				... this.others() ? [ this.Others() ] : [] ,
			]
			if( pages.length === 1 ) pages.push( this.Now() )
			return pages
		}

		@ $mol_mem
		title() {
			if( this.intro() != null ) return this.Intro().title()
			return this.Book().title()
		}

		@ $mol_mem
		meetups() {
			return this.$.$piterjs_meetup.all().slice()
			.sort( ( a , b )=> b.start().valueOf() - a.start().valueOf() )
		}

		@ $mol_mem
		meetup_current() {
			const id = this.meetup_id()
			const meetup = id ? this.meetup( id ) : this.meetups()[0]
			return meetup
		}

		@ $mol_mem
		place() {
			return this.meetup_current().place()
		}

		@ $mol_mem
		menu_meetups() {
			return this.meetups().map( meetup => this.Menu_meetup( meetup.id() ) )
		}
		menu_meetup( id : string ) { return this.meetup( id ) }
		menu_meetup_id( id : string ) { return id }

		toggle_intro( next? : boolean ) {
			
			if( next !== undefined ) {

				if( this.intro() ) {
					this.intro( null )
				} else {
					this.intro( 'main' )
				}

			}

			return Boolean( this.intro() )

		}

		video() {
			return this.$.$mol_state_arg.value( 'video' ) !== null
		}

		@ $mol_mem
		video_uri() {

			if( !this.video() ) return ''
			
			const id = this.meetup_id()
			if( !id ) return ''
			
			return this.meetup( id ).video() ?? ''
			
		}

	}

}
