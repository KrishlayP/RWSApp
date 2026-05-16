@extends('admin.layout', ['title' => $item->exists ? 'Edit Media' : 'Add Media'])

@section('content')
    <div class="topbar">
        <h1>{{ $item->exists ? 'Edit Media' : 'Add Media' }}</h1>
        <a class="button secondary" href="{{ route('admin.media.index') }}">Back</a>
    </div>
    <div class="panel">
        @if ($errors->any())
            <div class="errors">{{ $errors->first() }}</div>
        @endif
        <form method="post" action="{{ $item->exists ? route('admin.media.update', $item) : route('admin.media.store') }}">
            @csrf
            @if ($item->exists)
                @method('put')
            @endif
            <div class="form-grid">
                <div class="field">
                    <label for="category_id">Category</label>
                    <select id="category_id" name="category_id" required>
                        <option value="">Select category</option>
                        @foreach ($categories as $category)
                            <option value="{{ $category->id }}" @selected((string) old('category_id', $item->category_id) === (string) $category->id)>{{ $category->title }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="field">
                    <label for="type">Type</label>
                    <select id="type" name="type" required>
                        @foreach (['image', 'audio', 'video', 'book', 'text'] as $type)
                            <option value="{{ $type }}" @selected(old('type', $item->type) === $type)>{{ ucfirst($type) }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="field">
                    <label for="title">Title</label>
                    <input id="title" name="title" value="{{ old('title', $item->title) }}" required>
                </div>
                <div class="field">
                    <label for="subtitle">Subtitle</label>
                    <input id="subtitle" name="subtitle" value="{{ old('subtitle', $item->subtitle) }}">
                </div>
                <div class="field full">
                    <label for="image_url">Image URL</label>
                    <input id="image_url" name="image_url" type="url" value="{{ old('image_url', $item->image_url) }}" placeholder="https://...">
                </div>
                <div class="field full">
                    <label for="media_url">Download/Media URL</label>
                    <input id="media_url" name="media_url" type="url" value="{{ old('media_url', $item->media_url) }}" placeholder="https://...">
                </div>
                <div class="field">
                    <label for="size_label">Size Label</label>
                    <input id="size_label" name="size_label" value="{{ old('size_label', $item->size_label) }}" placeholder="2.1 MB">
                </div>
                <div class="field">
                    <label for="sort_order">Sort Order</label>
                    <input id="sort_order" name="sort_order" type="number" min="0" value="{{ old('sort_order', $item->sort_order ?? 0) }}">
                </div>
                <label class="check">
                    <input name="is_featured" type="checkbox" value="1" @checked(old('is_featured', $item->is_featured ?? false))>
                    Featured on home
                </label>
                <label class="check">
                    <input name="is_active" type="checkbox" value="1" @checked(old('is_active', $item->is_active ?? true))>
                    Active
                </label>
            </div>
            <p><button class="button" type="submit">Save Media</button></p>
        </form>
    </div>
@endsection
