namespace $.$$ {

	export class $piterjs_speech_page extends $.$piterjs_speech_page {

		speaker() {
			return this.speech().speaker()
		}

		@ $mol_mem
		override links() {
			return [
				... ( this.editing() || this.slides() ) ? [ this.Slides() ] : [] ,
				... ( this.editing() || this.video() ) ? [ this.Video() ] : [] ,
			]
		}

		override Public() {
			if( !this.editing() ) return null!
			return super.Public()
		}

		override poster_name() {
			return `${ this.speaker().title() } - ${ this.title() }.png`
		}

		override poster_blob() {
			const canvas = $mol_wire_sync( this.$ ).$mol_dom_capture_canvas( this.Poster().dom_tree() )
			const picture = $mol_picture.fit( canvas )
			const blob = picture.format( `image/png` )!
			return blob
		}
		
	}

}
