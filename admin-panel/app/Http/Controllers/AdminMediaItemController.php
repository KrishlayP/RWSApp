<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\MediaItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class AdminMediaItemController extends Controller
{
    public function index(): View
    {
        return view('admin.media.index', [
            'items' => MediaItem::with('category')->orderByDesc('created_at')->paginate(25),
        ]);
    }

    public function create(): View
    {
        return view('admin.media.form', [
            'item' => new MediaItem(['type' => 'image', 'is_active' => true]),
            'categories' => Category::orderBy('title')->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        MediaItem::create($this->validated($request));

        return redirect()->route('admin.media.index')->with('status', 'Media item created.');
    }

    public function edit(MediaItem $medium): View
    {
        return view('admin.media.form', [
            'item' => $medium,
            'categories' => Category::orderBy('title')->get(),
        ]);
    }

    public function update(Request $request, MediaItem $medium): RedirectResponse
    {
        $medium->update($this->validated($request));

        return redirect()->route('admin.media.index')->with('status', 'Media item updated.');
    }

    public function destroy(MediaItem $medium): RedirectResponse
    {
        $medium->delete();

        return redirect()->route('admin.media.index')->with('status', 'Media item deleted.');
    }

    private function validated(Request $request): array
    {
        $data = $request->validate([
            'category_id' => ['required', 'exists:categories,id'],
            'type' => ['required', 'in:image,audio,video,book,text'],
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'image_url' => ['nullable', 'url', 'max:2048'],
            'media_url' => ['nullable', 'url', 'max:2048'],
            'size_label' => ['nullable', 'string', 'max:64'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'is_featured' => ['nullable', 'boolean'],
            'is_active' => ['nullable', 'boolean'],
        ]);

        $data['sort_order'] = $data['sort_order'] ?? 0;
        $data['is_featured'] = $request->boolean('is_featured');
        $data['is_active'] = $request->boolean('is_active');

        return $data;
    }
}
